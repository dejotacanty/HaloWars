import { LeaderboardPlayer } from "../../../interfaces/LeaderboardResponse";
import { LeaderTableHeadings } from "./LeaderTableHeadings";
import { LeaderTableRow } from "./LeaderTableRow";

export const LeaderTable = ({leaderPlayers}: {leaderPlayers: LeaderboardPlayer[]}) => {
  return (
    <div className="extend-table initialized">
      <div className="table-surface">
        <table>
          <LeaderTableHeadings />
          <tbody>
              {leaderPlayers.map((lPlayer) => {
                  return  <LeaderTableRow leaderPlayer={lPlayer} />
              })}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};
