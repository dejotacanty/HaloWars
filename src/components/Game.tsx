import { useMatch } from "../hooks/match/Match";
import { GameTable } from "./GameTable";
import { Page } from "./layout/Page";
import { Tabs } from "./Tabs";
import { useState, useEffect, useCallback, useContext } from "react";
import { Match, Player, ResourceHeartBeat } from "../interfaces/Match";
import { BuildOrder } from "./BuildOrder";
import { GameGraphs } from "./charts/stat-charts/GameGraphs";
import { convertPlaytime, findPlaylist, getDateFormat, getGamerTags, team1Colour, team2Colour, useQuery } from "../utils/helpers";
import { calculatePopulation, calculateSuppyRate } from "../utils/graph_helper";
import { entries } from "../utils/entries";
import { GlobalContext } from "../context/context";
import { mapData } from "../data/maps";
import { playlists } from "../data/playlists";
import { format } from "date-fns";
import { leaderData } from "../data/leaders";
import { usePlayerXp } from "../hooks/player/usePlayerXp";

export const Game = () => {
  let query = useQuery();
  const matchId = query.get("matchId");
  const { match } = useMatch(matchId as string);
  const {playerXp} = usePlayerXp(getGamerTags(match?.Players), match?.PlaylistId)
  console.log({playerXp}, 'game')
  let computerPlayerIndex = 1;

  if(match) {
    for(const[key, player] of entries(match.Players)) {
      if(match.Players[key].HumanPlayerId === null) {
        match.Players[key].HumanPlayerId = {
          Gamertag: 'Computer ' + computerPlayerIndex,
          Xuid: null
        }
        computerPlayerIndex++;
      }
    }
  }

  const {gamerTag} = useContext(GlobalContext)

  const resourceEvents = useCallback(() => {
    if (!match) return [];
    return match.events.filter(
      (e) => e.EventName === "ResourceHeartbeat"
    ) as ResourceHeartBeat[];
  }, [match]);

  const supplyData = useCallback(() => {
    if (!match) return [];
    console.log('calculating supplies')
    return calculateSuppyRate(resourceEvents(), match.Players, "supply");
  }, [match]);

  const powerData = useCallback(() => {
    if (!match) return [];
    return calculateSuppyRate(resourceEvents(), match.Players, "power");
  }, [match]);

  const populationData = useCallback(() => {
    if (!match) return [];
    return calculatePopulation(resourceEvents(), match.Players);
  }, [match]);
  if (!match || !matchId) {
    return <></>;
  }

  let chosenPlayer: Player = match.Players[1];
  for(const [playerIndex, player] of entries(match.Players)) {
    if(player.HumanPlayerId && player.HumanPlayerId.Gamertag.toLowerCase().trim() === gamerTag.toLowerCase()) {
      chosenPlayer = player
    }
  }

  const playlist = findPlaylist(match.PlaylistId);
  const dateFormat = getDateFormat(match.MatchStartDate.ISO8601Date)
  const map = mapData[match.MapId]
  const chosenPlayerWon = match.Teams[chosenPlayer.TeamId].MatchOutcome === 1

  return (
    <Page title="">
      <div className="hw2-match-details">
        <div className="overview">
          <div className="visual">
            <div className="map-image">
              <img
                src={map.Image.View.Media.MediaUrl}
                alt={map.DisplayInfo.View.HW2MapDisplayInfo.Name}
              />
            </div>
            <div className="leader-image" style={{ color: "#67A6E5" }}>
              <img
                src={leaderData[chosenPlayer.LeaderId].Image.View.Media.MediaUrl}
                alt={leaderData[chosenPlayer.LeaderId].DisplayInfo.View.HW2LeaderDisplayInfo?.Name}
              />
            </div>
            <div className="text">
              <h3 className="numeric--medium">{chosenPlayerWon ? 'Victory' : 'Defeat'}</h3>
              <h4 className="text--medium">{mapData[match.MapId].DisplayInfo.View.HW2MapDisplayInfo.Name}</h4>
            </div>
          </div>
          <div className="info">
            <div className="stat">
              <p className="text--large">{playlist?.View.HW2Playlist.DisplayInfo.View.HW2PlaylistDisplayInfo.Name}</p>
              <p className="text--smallest">Deathmatch - {match.Teams[1].TeamSize}v{match.Teams[2].TeamSize}</p>
            </div>
            <div className="stats-group flow">
              <div className="stat">
                <p className="numeric--small">
                  <time>{dateFormat}</time>
                </p>
              </div>
              <div className="stat">
                 <p className="numeric--small"> {convertPlaytime(match.MatchDuration)}</p>
              </div>
            </div>
            <ol className="hw2--score-overview">
              <li className={`${chosenPlayer.TeamId === 1 ? 'highlight' : ''}`} style={{ borderLeftColor: chosenPlayer.TeamId === 1 ? team1Colour : '' }}>
                <div className="persona large">
                  <div className="image">
                    <span>
                      <img src="https://content.halocdn.com/media/Default/games/halo-wars-2/waypoint/team-1-red-icon-76906c53830b4bc89e76925980aa31db.png" />
                    </span>
                  </div>
                  <div className="text">
                    <p className="numeric--medium">{match.Teams[1].MatchOutcome === 1 ? ' victory': 'defeat'}</p>
                    <p className="text--smallest">Team 1</p>
                  </div>
                </div>
              </li>
              <li className={`${chosenPlayer.TeamId === 2 ? 'highlight' : ''}`} style={{ borderLeftColor: chosenPlayer.TeamId === 2  ? team2Colour : '' }}>
                <div className="persona large">
                  <div className="image">
                    <span>
                      <img src="https://content.halocdn.com/media/Default/games/halo-wars-2/waypoint/team-2-blue-icon-700899fb9c2f424a90316c8f8fb13d3f.png" />
                    </span>
                  </div>
                  <div className="text">
                    <p className="numeric--medium">{match.Teams[2].MatchOutcome === 1 ? ' victory': 'defeat'}</p>
                    <p className="text--smallest">Team 2</p>
                  </div>
                </div>
              </li>
            </ol>{" "}
          </div>
        </div>
        <div></div>
        <Tabs
          tabs={["Stats", "Graphs", "Build Order"]}
          tabData={[
            <GameTable match={match} playerXp={playerXp}/>,
            <GameGraphs
              match={match}
              data={{
                supplyData: supplyData(),//
                powerData: powerData(),
                populationData: populationData(),
              }}
            />,
            <BuildOrder match={match} />,
          ]}
        />
        ,
      </div>
    </Page>
  );
};
