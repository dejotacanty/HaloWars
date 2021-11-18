import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { leaderData } from "../../../data/leaders";
import { Player } from "../../../interfaces/Match";
import { teamPlayerColourMaps } from "../../../utils/helpers";
import { PlayerIndex } from "../../BuildOrder";
import { TeamHeader } from "../../table/TeamHeader";

interface LegendProps {
  team1Players: PlayerIndex[];
  team2Players: PlayerIndex[];
  onFilterChange: (filters: IFilter) => void;
}

export interface IFilter {
  [playerId: number]: boolean;
}

export const Legend = ({
  team1Players,
  team2Players,
  onFilterChange,
}: LegendProps) => {
  const [team1Selects, setTeam1Selects] = useState<boolean[]>([
    true,
    true,
    true,
  ]);
  const [team2Selects, setTeam2Selects] = useState<boolean[]>([
    true,
    true,
    true,
  ]);

  useEffect(() => {
    const filter: IFilter = {};
    team1Players.forEach((p, i) => {
      filter[p.playerIndex] = team1Selects[i];
    });
    team2Players.forEach((p, i) => {
      filter[p.playerIndex] = team2Selects[i];
    });
    onFilterChange(filter);
  }, [team2Selects, team1Selects]);

  return (
    <figcaption className="legend">
      <div className="grid overflowable">
        <div className="row row-2">
          <div className="col">
            <div className="extend-table initialized">
              <div className="table-surface">
                <table>
                  <thead>
                    <tr className="group-id">
                      <TeamHeader
                        teamId={1}
                        isCheck={true}
                        onSelect={(selected) => {
                          selected
                            ? setTeam1Selects([true, true, true])
                            : setTeam1Selects([false, false, false]);
                        }}
                      />
                    </tr>
                  </thead>
                  <tbody>
                    {team1Players.map((player, index) => {
                      const leader = leaderData[player.LeaderId];
                      return (
                        <tr>
                          <th className="col--checkbox">
                            <input
                              type="checkbox"
                              checked={team1Selects[index]}
                              onChange={() => {
                                const newValue = !team1Selects[index];
                                team1Selects.splice(index, 1, newValue);
                                setTeam1Selects([...team1Selects]);
                              }}
                            />
                          </th>
                          <th
                            className="color"
                            style={{
                              color:
                                teamPlayerColourMaps[player.TeamId][
                                  player.TeamPlayerIndex
                                ],
                            }}
                          ></th>
                          <th className="id--image">
                            {" "}
                            <div className="persona-image avatar avatar--hw2-leader">
                              <span>
                                <img
                                  src={leader.Image.View.Media.MediaHeadUrl}
                                  alt={
                                    leader.DisplayInfo.View.HW2LeaderDisplayInfo
                                      ?.Name
                                  }
                                />
                              </span>
                            </div>
                          </th>
                          <th className="id--text">
                            <Link
                              className="text--medium gamertag case-sensitive"
                              to={
                                "/service-record?gamerTag=" +
                                player.HumanPlayerId?.Gamertag
                              }
                            >
                              {player.HumanPlayerId?.Gamertag}
                            </Link>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="extend-table initialized">
              <div className="table-surface">
                <table>
                  <thead>
                    <tr className="group-id">
                      <TeamHeader
                        teamId={2}
                        isCheck={true}
                        onSelect={(selected) => {
                          selected
                            ? setTeam2Selects([true, true, true])
                            : setTeam2Selects([false, false, false]);
                        }}
                      />
                    </tr>
                  </thead>
                  <tbody>
                    {team2Players.map((player, index) => {
                      const leader = leaderData[player.LeaderId];
                      return (
                        <tr>
                          <th className="col--checkbox">
                            <input
                              type="checkbox"
                              checked={team2Selects[index]}
                              onChange={() => {
                                const newValue = !team2Selects[index];
                                team2Selects.splice(index, 1, newValue);
                                setTeam2Selects([...team2Selects]);
                              }}
                            />
                          </th>
                          <th
                            className="color"
                            style={{
                              color:
                                teamPlayerColourMaps[player.TeamId][
                                  player.TeamPlayerIndex
                                ],
                            }}
                          ></th>
                          <th className="id--image">
                            {" "}
                            <div className="persona-image avatar avatar--hw2-leader">
                              <span>
                                <img
                                  src={leader.Image.View.Media.MediaHeadUrl}
                                  alt={
                                    leader.DisplayInfo.View.HW2LeaderDisplayInfo
                                      ?.Name
                                  }
                                />
                              </span>
                            </div>
                          </th>
                          <th className="id--text">
                            <Link
                              className="text--medium gamertag case-sensitive"
                              to={
                                "/service-record?gamerTag=" +
                                player.HumanPlayerId?.Gamertag
                              }
                            >
                              {player.HumanPlayerId?.Gamertag}
                            </Link>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </figcaption>
  );
};
