import { useEffect, useState } from "react";
import { csrData } from "../../data/csr";
import { PieChartData } from "../../interfaces/Chart";
import { Csr } from "../../interfaces/Csr";
import {
  PlayerStatSummary,
  RankedPlaylistStatsEntity,
  HighestCsr
} from "../../interfaces/PlayerStatSummary";
import { findPlaylist, hasCsr, unrankedPlaylistMock } from "../../utils/helpers";
import { HaloPieChart } from "../charts/PieChart";

export const HighestRank = ({
  playerStatSummary,
  chartHeight,
}: {
  playerStatSummary: PlayerStatSummary;
  chartHeight: number;
}) => {
  

  const [csr, setCsr] = useState<Csr>();
  const [playlistEntry, setPlaylistEntry] =
    useState<RankedPlaylistStatsEntity>();

  useEffect(() => {
    const search = playerStatSummary.MatchmakingSummary.RankedPlaylistStats
      ? playerStatSummary.MatchmakingSummary.RankedPlaylistStats.filter((r) =>
          r.HighestCsr === null ? false : true
        )
      : [];
    let highestIndex = 0;
    let highestDesignation = 0;
    let highestTierPercent = 0;
    let highestRaw = 0;
    let highestRank = 1000;
    for (let i = 0; i < search.length; i++) {
      const pNextTier = search[i].HighestCsr.PercentToNextTier;
      const designation = search[i].HighestCsr.Designation;
      if (search[i].HighestCsr.Designation >= highestDesignation) {
        if (designation === 6 && highestDesignation < 7) {
          if (search[i].HighestCsr.Raw > highestRaw) {
            highestDesignation = designation;
            highestRaw = search[i].HighestCsr.Raw;
            highestIndex = i;
          }
          continue;
        }
        if(designation === 7) {
          if ((search[i].HighestCsr.Rank as number) < highestRank) {
            highestDesignation = designation;
            highestRank = (search[i].HighestCsr.Rank as number);
            highestIndex = i;
          }
          continue;
        }
        if (pNextTier > highestTierPercent) {
          highestTierPercent = pNextTier;
          highestIndex = i;
        }
      }
    }
    //if no rank games then they are unranked
    
    const unrankedCsr: HighestCsr = {
      Designation: 0,
      Tier: 0,
      PercentToNextTier: 100,
      Raw: 0,
      MeasurementMatchesRemaining: 0
    }
    const tmpHighestCsr = search.length === 0 ? unrankedCsr : search[highestIndex].HighestCsr;
    const csr = csrData[tmpHighestCsr.Designation];
    setCsr(csr);
    setPlaylistEntry(search[highestIndex] ? search[highestIndex] : unrankedPlaylistMock);
  }, [playerStatSummary]);
  if (!csr || !playlistEntry) return <></>;
  
  const rankData: PieChartData[] = [
    {
      name: "win",
      value: hasCsr(playlistEntry.HighestCsr.Designation)
        ? 100
        : playlistEntry.HighestCsr.PercentToNextTier,
    },
    {
      name: "loss",
      value: hasCsr(playlistEntry.HighestCsr.Designation)
        ? 0
        : 100 - playlistEntry.HighestCsr.PercentToNextTier,
    },
  ]

  const playlist = findPlaylist(playlistEntry.PlaylistId)
  return (
    <div className="halo-circle stat">
      <div className="chart-title">
        <p className="text--large">
            {playlist?.View.HW2Playlist.DisplayInfo.View.HW2PlaylistDisplayInfo.Name}
        </p>
        <p className="text--smallest">Top All-Time CSR</p>
      </div>
      <div className="csr">
        <div
          className={`rank-${csr.Title.toLowerCase()} circle-chart loaded`}
          data-circle="progress"
          data-value="40"
        >
          <div className="metrics">
            <div>
              <img
                src={csr.Tiers[playlistEntry.HighestCsr.Tier].Media.MediaUrl}
              />
              <p className="text--small">
                {playlistEntry.HighestCsr.Designation === 7 && (
                    '#' + playlistEntry.HighestCsr.Rank + ' '
                )}
                {csr.Title}
                {!hasCsr(playlistEntry.HighestCsr.Designation) && playlistEntry.HighestCsr.Designation !== 0 &&
                  ' ' + playlistEntry.HighestCsr.Tier}
              </p>
              {hasCsr(playlistEntry.HighestCsr.Designation) && (
                <p className="text--smallest">
                  CSR: {playlistEntry.HighestCsr.Raw}
                </p>
              )}
            </div>
          </div>
          <HaloPieChart
            chartSetting="rank"
            data={rankData}
            label="Rank"
            height={chartHeight}
            designation={playlistEntry.HighestCsr.Designation}
          />
        </div>
      </div>
    </div>
  );
};
