import { useEffect } from "react";
import { leaderData } from "../../data/leaders";
import { PieChartData } from "../../interfaces/Chart";
import { PlayerStatSummary, RankedModeStatsEntity, SocialModeStatsEntity } from "../../interfaces/PlayerStatSummary";
import { formatLeaderStatData } from "../../utils/helpers";
import { LeaderChartData } from "../ServiceRecord";

export const LeadersUsed = ({
    stats,
}: {
  stats: LeaderChartData[];
}) => {


    let total = 0;
    for(let i = 0; i < stats.length; i++) {
        total += stats[i].value
    }

    const leader = leaderData[stats[0].leaderId]
  return (
    <div className="stat">
      <div className="chart-title">
        <p className="text--large">&nbsp;</p>
        <p className="text--smallest">&nbsp;</p>
      </div>
      <div className="hw2-leader-landscape">
        <img
          src={leader ? leader.Image.View.Media.MediaHeadUrlMain : ''}
          alt={stats[0].name}
        />
      </div>

      <ol className="color-legend">
        <li className="color-1">
          <div className="desc">
            {stats[0].name}
            <br />
          </div>
          <div className="value">{Math.round(stats[0].value / total * 100)}%</div>
        </li>
        {stats[1] && (
        <li className="color-2">
          <div className="desc">
            {stats[1].name}
            <br />
          </div>
          <div className="value">{Math.round(stats[1].value / total * 100)}%</div>
        </li>
        )}
        {stats[2] && (
        <li className="color-3">
          <div className="desc">
            {stats[2].name}
            <br />
          </div>
          <div className="value">{Math.round(stats[2].value / total * 100)}%</div>
        </li>
        )}
        {stats[3] && (
          
        <li className="color-4">
          <div className="desc">
            {stats[3].name}
            <br />
          </div>
          <div className="value">{Math.round(stats[3].value / total * 100)}%</div>
        </li>
        )}
      </ol>
    </div>
  );
};
