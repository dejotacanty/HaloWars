import { Link } from "react-router-dom";
import { csrData } from "../../../data/csr";
import { leaderData } from "../../../data/leaders";
import { LeaderboardPlayer } from "../../../interfaces/LeaderboardResponse";

export const LeaderTableRow = ({leaderPlayer}: {leaderPlayer: LeaderboardPlayer}) => {
  return (
    <tr>
      <th className="align-left">{leaderPlayer.Rank}</th>
      <td className="id--text">
        <Link
          className="gamertag case-sensitive"
          to={`/service-record?gamerTag=${leaderPlayer.Player.Gamertag}`}
        >
          {leaderPlayer.Player.Gamertag}
        </Link>
      </td>
      <td className="align-left">
        <div className="persona">
          <div className="image">
            <span>
              <img
                src={csrData[leaderPlayer.Score.DesignationId].Tiers[leaderPlayer.Score.Tier].Media.MediaUrl}
                alt={`${leaderPlayer.Score.DesignationId === 7 && '#' + leaderPlayer.Score.Rank} ${csrData[leaderPlayer.Score.DesignationId].Title}`}
              />
            </span>
          </div>
          <div className="text">
            <p>CSR: {leaderPlayer.Score.Csr}</p>
          </div>
        </div>
      </td>
      <td className="align-left">
        <div className="text">
          <p>{leaderPlayer.Wins.TotalMatchesWon}</p>
        </div>
      </td>
      <td className="align-left">
        <div className="text">
          <p>{leaderPlayer.Losses.TotalMatchesLost}</p>
        </div>
      </td>
      <td className="align-left">
        <div className="persona">
          <div className="image avatar avatar--hw2-leader">
            <span>
              <img
                src={leaderData[1].Image.View.Media.MediaHeadUrl}
                alt={leaderData[1].DisplayInfo.View.HW2LeaderDisplayInfo?.Name}
              />
            </span>
          </div>
          <div className="text">
            <p>N/A :(</p>
          </div>
        </div>
      </td>
    </tr>
  );
};
