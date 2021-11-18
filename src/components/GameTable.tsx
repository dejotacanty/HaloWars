import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { csrData } from "../data/csr";
import { leaderData } from "../data/leaders";
import { Match, Player } from "../interfaces/Match";
import { ResultElement } from "../interfaces/MMR";
import { entries } from "../utils/entries";
import {
  getPlayersByTeam,
  getStatsForTable,
  statTableHeaders,
  teamPlayerColourMaps,
} from "../utils/helpers";
import { TeamHeader } from "./table/TeamHeader";

interface GameTableProps {
  match: Match;
  playerXp?: ResultElement[]
}

const headings: string[][] = JSON.parse(JSON.stringify(statTableHeaders));

const NavCarousel = ({ onChange }: { onChange: (index: number) => void }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    onChange(selectedIndex);
  }, [selectedIndex]);
  return (
    <header>
      <div className="nav-content"></div>
      <nav className="carousel-paging">
        <button
          className="prev"
          type="button"
          onClick={() =>
            selectedIndex > 0 && setSelectedIndex(selectedIndex - 1)
          }
          disabled={selectedIndex === 0}
        >
          <span className="icon icon--left"></span>
        </button>{" "}
        <span className="paging--mini-index">
          <span className="page-current">1</span>/
          <span className="page-total">4</span>
        </span>
        <ol>
          {[0, 1, 2].map((value, index) => {
            return (
              <li
                data-index={index}
                className={`${selectedIndex === index ? "current" : ""}`}
              >
                <button
                  data-analytics="{pageName}:Pagination/Dot/Table"
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                ></button>
              </li>
            );
          })}
        </ol>
        <button
          className="next"
          data-analytics="{pageName}:Pagination/NextPage/Table"
          type="button"
          onClick={() =>
            selectedIndex < 2 && setSelectedIndex(selectedIndex + 1)
          }
          disabled={selectedIndex === 2}
        >
          <span className="icon icon--right"></span>
        </button>
      </nav>
    </header>
  );
};

const TableRow = ({
  player,
  columns,
  playerXp,
}: {
  player: Player;
  columns: string[];
  playerXp?: ResultElement[]
}) => {
  //this match id  contains champions
  //19e6dda3-3f6a-4457-a5e6-4b9cfae7f482
  const stats = getStatsForTable(player, columns, playerXp);

  const leader = leaderData[player.LeaderId];
  return (
    <tr>
      <th
        className="color"
        style={{
          color: teamPlayerColourMaps[player.TeamId][player.TeamPlayerIndex],
        }}
      ></th>
      <th className="id--image">
        <div className="persona-image avatar avatar--hw2-leader">
          <span>
            <img
              src={leader.Image.View.Media.MediaHeadUrl}
              alt={leader.DisplayInfo.View.HW2LeaderDisplayInfo?.Name}
            />
          </span>
        </div>
      </th>
      <th className="id--text">
        <Link
          className="text--medium gamertag case-sensitive"
          to={"/service-record?gamerTag=" + player.HumanPlayerId?.Gamertag}
          onClick={(e) => {
            if(player.HumanPlayerId === null) {
            e.preventDefault();
            e.stopPropagation();
            }
          }}
        >
          {player.HumanPlayerId?.Gamertag}
        </Link>
      </th>
      {stats.map((s) => {
        return <td>{s}</td>;
      })}
    </tr>
  );
};

export const GameTable = ({ match, playerXp }: GameTableProps) => {
  const { team1Players, team2Players } = getPlayersByTeam(match.Players);
  if (team1Players[0].RatingProgress && team1Players[0].RatingProgress.UpdatedCsr !== null) {

    headings[0] = [...statTableHeaders[3], ...statTableHeaders[0]];
  } else {
    headings[0] = statTableHeaders[0];
  }
  if(match.PlaylistId !== "00000000-0000-0000-0000-000000000000") {
    headings[0] = [...statTableHeaders[4],...headings[0]]
  }
  const [team1TableHeadings, setTeam1TableHeadings] = useState(headings[0]);
  const [team2TableHeadings, setTeam2TableHeadings] = useState(headings[0]);

  return (
    <>
      <div className="extend-table initialized">
        <NavCarousel onChange={(i) => setTeam1TableHeadings(headings[i])} />
        <div className="table-surface" style={{overflow: "auto"}}>
          <table>
            <thead>
              <tr>
                <th className="color dock"></th>
                <th className="dock id--image"></th>
                <th className="dock id--text"></th>
                {team1TableHeadings.map((heading) => (
                  <th>{heading}</th>
                ))}
              </tr>
              <tr className="group-id">
                <TeamHeader teamId={1} />
                {team1TableHeadings.map(() => {
                  return <th></th>;
                })}
              </tr>
            </thead>
            <tbody>
              {team1Players.map((player) => {
                return (
                  <TableRow player={player} columns={team1TableHeadings} playerXp={playerXp} />
                );
              })}
            </tbody>
          </table>
        </div>
        </div>
          <div className="extend-table initialized">
            <NavCarousel onChange={(i) => setTeam2TableHeadings(headings[i])} />
            <div className="table-surface" style={{overflow: "auto"}}>
              <table>
                <thead>
                  <tr>
                    <th className="color dock"></th>
                    <th className="dock id--image"></th>
                    <th className="dock id--text"></th>
                    {team2TableHeadings.map((heading) => (
                      <th>{heading}</th>
                    ))}
                  </tr>
                  <tr className="group-id">
                    <TeamHeader teamId={2} />

                    {team2TableHeadings.map(() => {
                      return <th></th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {team2Players.map((player) => {
                    return (
                      <TableRow player={player} columns={team2TableHeadings} playerXp={playerXp} />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
    </>
  );
};
