import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PieChart } from "recharts";
import { GlobalContext } from "../context/context";
import { leaderData } from "../data/leaders";
import { useGameHistory } from "../hooks/player/GameHistory";
import {
  getPlayerStat,
  usePlayerStatSummary,
} from "../hooks/player/PlayerStatSummary";
import { usePageTracking } from "../hooks/usePageTracking";
import { PieChartData } from "../interfaces/Chart";
import {
  PlayerStatSummary,
  RankedModeStatsEntity,
  RankedPlaylistStatsEntity,
  SocialModeStatsEntity,
} from "../interfaces/PlayerStatSummary";
import { entries } from "../utils/entries";
import { formatLeaderStatData } from "../utils/helpers";
import { HaloPieChart } from "./charts/PieChart";
import { SimpleBarChart } from "./charts/SimpleBarChart";
import { Page } from "./layout/Page";
import { HighestRank } from "./service-record/HighestRank";
import { LeadersUsed } from "./service-record/LeadersUsed";

export type LeaderChartData = PieChartData & { leaderId: string };

function getStatsFromPlaylist(playlistStats: any[], stats: LeaderChartData[]) {
  for (let i = 0; i < playlistStats.length; i++) {
    stats = formatLeaderStatData(playlistStats[i].LeaderStats, stats);
  }
  return stats;
}

function getLeaderSummary(playerStatSummary: PlayerStatSummary) {
  let stats: LeaderChartData[] = [];
  if (playerStatSummary.MatchmakingSummary.RankedPlaylistStats) {
    stats = getStatsFromPlaylist(
      playerStatSummary.MatchmakingSummary.RankedPlaylistStats,
      stats
    );
  }

  if (playerStatSummary.MatchmakingSummary.SocialPlaylistStats) {
    stats = getStatsFromPlaylist(
      playerStatSummary.MatchmakingSummary.SocialPlaylistStats,
      stats
    );
  }

  stats = getStatsFromPlaylist(
    [
      playerStatSummary.CustomSummary.CustomStats,
      playerStatSummary.CustomSummary.SkirmishStats.MultiplayerStats,
      playerStatSummary.CustomSummary.SkirmishStats.SinglePlayerStats,
    ],
    stats
  );
  let othersTotal = 0;
  stats.slice(3).forEach((stat) => {
    othersTotal += stat.value;
  });
  stats.splice(3, stats.length - 3, {
    name: "Others",
    value: othersTotal,
    leaderId: "",
  });
  return stats;
}

function getWinLossSummary(playerStatSummary: PlayerStatSummary) {
  const calcStat = (
    playlistStats: any[] | null | undefined,
    winLoss: { win: number; loss: number }
  ) => {
    if (playlistStats) {
      playlistStats.forEach((pl) => {
        winLoss.win += pl.TotalMatchesWon;
        winLoss.loss += pl.TotalMatchesLost;
      });
    }
  };

  const winLoss = {
    win: 0,
    loss: 0,
  };

  calcStat(playerStatSummary.MatchmakingSummary.RankedPlaylistStats, winLoss);
  calcStat(playerStatSummary.MatchmakingSummary.SocialPlaylistStats, winLoss);
  // calcStat(
  //   [
  //     //playerStatSummary.CustomSummary.CustomStats,
  //     //playerStatSummary.CustomSummary.SkirmishStats.MultiplayerStats,
  //     //playerStatSummary.CustomSummary.SkirmishStats.SinglePlayerStats,
  //   ], winLoss)
  return winLoss;
}

export const ServiceRecord = () => {
  const { gamerTag } = useContext(GlobalContext);
  usePageTracking()

  const { gameHistory } = useGameHistory(gamerTag, 0, 20, "matchmaking");

  const { playerStatSummary } = usePlayerStatSummary(gamerTag);

  const ref = useCallback((node) => {
    if (node !== null) {
      setLeaderPieChartHeight(node.offsetWidth);
      const handleResize = () => {
        setLeaderPieChartHeight(node.offsetWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const [leaderPieChartHeight, setLeaderPieChartHeight] = useState(0);

  if (!gameHistory || !gamerTag || !playerStatSummary) {
    return <></>;
  }

  if (gameHistory.ResultCount === 0) {
    return (
      <h1 style={{ textAlign: "center" }}>
        {gamerTag} has not played halo wars 2 :(
      </h1>
    );
  }

  const leaderStats = getLeaderSummary(playerStatSummary);
  const winStats = getWinLossSummary(playerStatSummary);

  const winLossData: PieChartData[] = [
    {
      name: "win",
      value: winStats.win,
    },
    {
      name: "loss",
      value: winStats.loss,
    },
  ];

  const winData = [];
  const lossData = [];
  for (let i = 0; i < gameHistory.ResultCount; i++) {
    const index = gameHistory.ResultCount - 1 - i;
    winData.push({
      name: "win",
      value: gameHistory.Results[index].PlayerMatchOutcome === 1 ? 100 : 0,
    });
    lossData.push({
      name: "loss",
      value: gameHistory.Results[index].PlayerMatchOutcome === 1 ? 0 : 100,
    });
  }
  let total = 0;
  for (let i = 0; i < leaderStats.length; i++) {
    total += leaderStats[i].value;
  }

  return (
    <Page title="Summary">
      <div className="grid">
        <div className="row row-4 valign-bottom">
          <div className="col">
            <a
              className="text--large case-sensitive"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              {gamerTag}
            </a>
            <p className="text--smallest">6th Star</p>
            <div ref={ref} className="stat halo-circle">
              <div
                className="circle-chart loaded"
                data-circle="proportion"
                data-values="17.0387779083431,15.3349001175088,12.1621621621622,55.4641598119859"
              >
                <div className="metrics">
                  <div>
                    <p className="numeric--medium">
                      <span className="value">
                        {Math.round((leaderStats[0].value / total) * 100)}
                        <span className="slash">%</span>
                      </span>
                    </p>
                    <p className="text--smallest">{leaderStats[0].name}</p>
                  </div>
                </div>
                <HaloPieChart
                  data={leaderStats}
                  label="games"
                  height={leaderPieChartHeight}
                  chartSetting="leader"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <LeadersUsed stats={leaderStats} />
          </div>
          <div className="col">
            <HighestRank
              playerStatSummary={playerStatSummary}
              chartHeight={leaderPieChartHeight}
            />
          </div>
          <div className="col">
            {" "}
            <div className="halo-circle stat">
              <div
                className="circle-chart loaded"
                data-half-circle=""
                data-value="53.1582238899312"
              >
                <div className="metrics">
                  <div>
                    <p className="numeric--medium">
                      <span className="value">
                        {Math.round(
                          (winStats.win / (winStats.win + winStats.loss)) * 100
                        )}
                        <span className="slash">%</span>
                      </span>
                    </p>
                    <p className="text--smallest">All-Time Win Percentage</p>
                  </div>
                </div>
                <div style={{ marginBottom: -leaderPieChartHeight / 2 }}>
                  <HaloPieChart
                    data={winLossData}
                    label=""
                    height={leaderPieChartHeight}
                    chartSetting="winLoss"
                  />
                </div>
              </div>
            </div>
            <div className="stat">
              <h4 className="text--smallest">Last 20 games</h4>
              <div style={{ height: "30px" }}>
                <SimpleBarChart colour={"#43bbef"} data={winData} />
              </div>
              <div style={{ height: "30px" }}>
                <SimpleBarChart colour={"#f14108"} data={lossData} />
              </div>
              <ol className="color-legend">
                <li className="color-1">
                  <div className="desc">
                    Total Wins
                    <br />
                  </div>
                  <div className="value">{winStats.win}</div>
                </li>
                <li className="color-5">
                  <div className="desc">
                    Total Losses
                    <br />
                  </div>
                  <div className="value">{winStats.loss}</div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="button-list">
        <ul>
          <li>
            <Link className="button" to="/game-history">
              Game History
            </Link>
          </li>
        </ul>
      </div>
    </Page>
  );
};
