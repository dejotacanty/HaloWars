import { format, formatDistance, subDays } from "date-fns";
import { useLocation } from "react-router-dom";
import { PlayerIndex } from "../components/BuildOrder";
import { LeaderChartData } from "../components/ServiceRecord";
import { csrData } from "../data/csr";
import { leaderData } from "../data/leaders";
import { playlists } from "../data/playlists";
import { PieChartData } from "../interfaces/Chart";
import { ILeader } from "../interfaces/Leader";
import { Player } from "../interfaces/Match";
import { AllLeaderStats, LeaderStats, RankedPlaylistStatsEntity } from "../interfaces/PlayerStatSummary";
import { addHyphens, entries } from "./entries";

export const findPlaylist = (playlistId: string) =>
  playlists.find((p) => addHyphens(p.View.Identity) === playlistId);

export const teamPlayerColourMaps: {
  [key: number]: { [key: number]: string };
} = {
  1: {
    0: "#98252A",
    1: "#E4CB56",
    2: "#C36533",
  },
  2: {
    0: "#304197",
    1: "#67A6E5",
    2: "#3F7F57",
  },
};

export const designationToColourMap = (designation: number) => {
  if (!hasCsr(designation)) {
    return "#43bbef";
  }
  if (designation === 6) {
    return "#0a090a";
  }

  if (designation === 7) {
    return "#59146f";
  }
};

export const hasCsr = (designation: number) => {
  return [6, 7].includes(designation);
};

export const formatLeaderStatData = (
  stat: AllLeaderStats,
  leaderStats?: LeaderChartData[]
) => {
  let leaderStatsTmp = leaderStats ? leaderStats : [];

  for (const [key, value] of entries(stat as LeaderStats)) {
    let leader: ILeader | undefined = undefined;
    for (const [lKey, lValue] of entries(leaderData)) {
      if (lValue.Name === key) {
        leader = lValue;
        break;
      }
    }
    if (!leader) continue;
    const valExists = leaderStatsTmp.find((ls) => {
      return leader?.DisplayInfo.View.HW2LeaderDisplayInfo?.Name === ls.name;
    });
    if (valExists) {
      valExists.value += value.TotalMatchesStarted;
    } else {
      const tmpStat: any = {};
      tmpStat.name = leader.DisplayInfo.View.HW2LeaderDisplayInfo?.Name;
      tmpStat.value = value.TotalMatchesStarted;
      tmpStat.leaderId = leader.Id;

      leaderStatsTmp.push(tmpStat);
    }
  }
  leaderStatsTmp.sort((a, b) => (a.value > b.value ? -1 : 1));
  return leaderStatsTmp;
};

export const millisToMinutesAndSeconds = (millis: number) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export const useQuery = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
};

export const getPlayersByTeam = (players: { [key: string]: Player }) => {
  const team1Players: PlayerIndex[] = [];
  const team2Players: PlayerIndex[] = [];

  for (const [key, player] of entries(players)) {
    if (player.TeamId === 1) {
      team1Players.push({ ...player, playerIndex: Number(key) });
    } else {
      team2Players.push({ ...player, playerIndex: Number(key) });
    }
  }
  return { team1Players, team2Players };
};

const headerCsr = "CSR";
const headerUnitsBuilt = "Units Built";
const headerUnitsLost = "Units Lost";
const headerEnemyUnitsKilled = "Enemy Units Killed";
const headerBasesBuilt = "Bases Built";
const headerBasesDestroyed = "Bases Destroyed";
const headerBuildingsDestroyed = "Buildings Destroyed";
const headerSuppliesGenerated = "Supplies Generated";

export const statTableHeaders = [
  [
    headerUnitsBuilt,
    headerUnitsLost,
    headerEnemyUnitsKilled,
    headerBasesBuilt,
    headerBasesDestroyed,
    headerBuildingsDestroyed,
    headerSuppliesGenerated,
  ],
  [
    "Enery Generated",
    "Max Population Reached",
    "Max Tech Level Reached",
    "Supply Generators Built",
    "Energy Generators Build",
  ],
  [
    "Active Leader Powers Used",
    "Kills With Leader Powers",
    "Leader Points Spent",
    "Leader Power Units Spawned",
  ],
  [headerCsr],
];


const invalidUnitKeys = [
  'pow_gp_scatterbombDummy_01'
]

export const getStatsForTable = (player: Player, requestedStats: string[]) => {
  const stats: any[] = [];
  let builtUnits = 0;
  let unitsLost = 0;
  let unitsKilled = 0;
  for (const [key, unit] of entries(player.UnitStats)) {
    if(invalidUnitKeys.includes(key)) continue;
    builtUnits += unit.TotalBuilt;
    unitsLost += unit.TotalLost;
    unitsKilled += unit.TotalDestroyed;
  }
  requestedStats.forEach((s) => {
    if (s === headerCsr) {
      const designationId = player.RatingProgress.UpdatedCsr.Designation ? player.RatingProgress.UpdatedCsr.Designation : 0
      const designation = csrData[designationId];
      const tierId = designationId === 0 ? 10 - player.RatingProgress.UpdatedCsr.MeasurementMatchesRemaining : player.RatingProgress.UpdatedCsr.Tier
      const tier = designation.Tiers[tierId];
      console.log({tier, designation, r: player.RatingProgress.UpdatedCsr})
      const title = designationId === 7 ? '#' + player.RatingProgress.UpdatedCsr.Rank + ' ' + tier.Title : tier.Title
      stats.push(
        <img src={tier.Media.MediaUrl} alt={tier.Title} title={title} />
      );
      return;
    }

    if (s === headerBasesBuilt) {
      //stats[s] =
      //Tracked by events
    }

    if (s === headerUnitsBuilt) {
      stats.push(builtUnits);
      return;
    }

    if (s === headerUnitsLost) {
      stats.push(unitsLost);
      return;
    }

    if (s === headerEnemyUnitsKilled) {
      stats.push(unitsKilled);
      return;
    }

    if (s === headerSuppliesGenerated) {
      //stats[s] = player.
      //in the resource heart beats.
    }
    stats.push("");
  });
  return stats;
};

export const team1Colour = "#73353C";
export const team2Colour = "#3F5C7E";
export const team1Image =
  "https://content.halocdn.com/media/Default/games/halo-wars-2/waypoint/team-1-red-icon-76906c53830b4bc89e76925980aa31db.png";
export const team2Image =
  "https://content.halocdn.com/media/Default/games/halo-wars-2/waypoint/team-2-blue-icon-700899fb9c2f424a90316c8f8fb13d3f.png";

export const isLast24Hours = (date: string) => {
  const oneDayAgo = subDays(new Date(), 1).getTime();
  const gameStartTime = new Date(date).getTime();
  return oneDayAgo < gameStartTime
}

export const getDateFormat = (date: string) => {
  let dateFormat = format(new Date(date), "d/M/y");
  if (isLast24Hours(date)) {
    dateFormat = formatDistance(new Date(date), new Date(), {
      addSuffix: true,
    }).replace("about ", "");
  }
  return dateFormat
};

export const convertPlaytime = (playtime: string) => {
  const minuteMatch = playtime.match(/\d*M/)
  const secondMatch = playtime.match(/M\d*/)
  let minutes = 0;
  let seconds = 0;
  if(minuteMatch && minuteMatch?.length > 0) {
    minutes = Number(minuteMatch[0].replace('M',''))
  } 
  if(secondMatch && secondMatch?.length > 0) {
    seconds = Number(secondMatch[0].replace('M',''))
  } 
  return `00:${minutes < 10 ? '0'+minutes: minutes}:${seconds < 10 ? '0'+ seconds: seconds}`
}


export const unrankedPlaylistMock: RankedPlaylistStatsEntity = {
  "PlaylistId": "4a2cedcc-9098-4728-886f-60649896278d",
  "PlaylistClassification": 0,
  "HighestCsr": {
      "Tier": 0,
      "Designation": 0,
      "Raw": 0,
      "PercentToNextTier": 0,
      "MeasurementMatchesRemaining": 0,
      "Rank": 639
  },
  "TotalTimePlayed": "P9DT12H15M16.39S",
  "TotalMatchesStarted": 888,
  "TotalMatchesCompleted": 474,
  "TotalMatchesWon": 440,
  "TotalMatchesLost": 448,
  "TotalPointCaptures": 4085,
  "TotalUnitsBuilt": 41054,
  "TotalUnitsLost": 33008,
  "TotalUnitsDestroyed": 66718,
  "TotalCardPlays": 0,
  "HighestWaveCompleted": 0,
  "LeaderStats": {
      "Atriox": {
          "TotalTimePlayed": "P1DT14H55M24.28S",
          "TotalMatchesStarted": 149,
          "TotalMatchesCompleted": 81,
          "TotalMatchesWon": 73,
          "TotalMatchesLost": 76,
          "TotalLeaderPowersCast": 830
      },
      "Decimus": {
          "TotalTimePlayed": "P1DT4H8M55.334S",
          "TotalMatchesStarted": 116,
          "TotalMatchesCompleted": 63,
          "TotalMatchesWon": 63,
          "TotalMatchesLost": 53,
          "TotalLeaderPowersCast": 1224
      },
      "Shipmaster": {
          "TotalTimePlayed": "PT20H11M55.081S",
          "TotalMatchesStarted": 77,
          "TotalMatchesCompleted": 37,
          "TotalMatchesWon": 35,
          "TotalMatchesLost": 42,
          "TotalLeaderPowersCast": 557
      },
      "Forge": {
          "TotalTimePlayed": "PT9H39M50.183S",
          "TotalMatchesStarted": 36,
          "TotalMatchesCompleted": 16,
          "TotalMatchesWon": 15,
          "TotalMatchesLost": 21,
          "TotalLeaderPowersCast": 237
      },
      "Serina": {
          "TotalTimePlayed": "PT2H3M50.445S",
          "TotalMatchesStarted": 7,
          "TotalMatchesCompleted": 4,
          "TotalMatchesWon": 2,
          "TotalMatchesLost": 5,
          "TotalLeaderPowersCast": 67
      },
      "Isabel": {
          "TotalTimePlayed": "PT7H13M10.011S",
          "TotalMatchesStarted": 22,
          "TotalMatchesCompleted": 13,
          "TotalMatchesWon": 13,
          "TotalMatchesLost": 9,
          "TotalLeaderPowersCast": 195
      },
      "Cutter": {
          "TotalTimePlayed": "P1DT4H53M3.561S",
          "TotalMatchesStarted": 117,
          "TotalMatchesCompleted": 72,
          "TotalMatchesWon": 63,
          "TotalMatchesLost": 54,
          "TotalLeaderPowersCast": 874
      },
      "Johnson": {
          "TotalTimePlayed": "PT7H21M36.207S",
          "TotalMatchesStarted": 29,
          "TotalMatchesCompleted": 18,
          "TotalMatchesWon": 14,
          "TotalMatchesLost": 15,
          "TotalLeaderPowersCast": 301
      },
      "YapYap": {
          "TotalTimePlayed": "PT2H50M50.234S",
          "TotalMatchesStarted": 11,
          "TotalMatchesCompleted": 4,
          "TotalMatchesWon": 4,
          "TotalMatchesLost": 7,
          "TotalLeaderPowersCast": 1036
      },
      "Pavium": {
          "TotalTimePlayed": "PT17H13M52.297S",
          "TotalMatchesStarted": 66,
          "TotalMatchesCompleted": 33,
          "TotalMatchesWon": 31,
          "TotalMatchesLost": 35,
          "TotalLeaderPowersCast": 728
      },
      "Jerome": {
          "TotalTimePlayed": "PT5H32M13.549S",
          "TotalMatchesStarted": 22,
          "TotalMatchesCompleted": 8,
          "TotalMatchesWon": 7,
          "TotalMatchesLost": 15,
          "TotalLeaderPowersCast": 910
      },
      "Kinsano": {
          "TotalTimePlayed": "PT13H54M17.435S",
          "TotalMatchesStarted": 64,
          "TotalMatchesCompleted": 37,
          "TotalMatchesWon": 34,
          "TotalMatchesLost": 30,
          "TotalLeaderPowersCast": 512
      },
      "Lekgolo": {
          "TotalTimePlayed": "PT14H56M31.326S",
          "TotalMatchesStarted": 52,
          "TotalMatchesCompleted": 31,
          "TotalMatchesWon": 30,
          "TotalMatchesLost": 22,
          "TotalLeaderPowersCast": 597
      },
      "Arbiter": {
          "TotalTimePlayed": "PT15H58M48.477S",
          "TotalMatchesStarted": 61,
          "TotalMatchesCompleted": 33,
          "TotalMatchesWon": 33,
          "TotalMatchesLost": 28,
          "TotalLeaderPowersCast": 1634
      },
      "Anders": {
          "TotalTimePlayed": "PT3H40M26.131S",
          "TotalMatchesStarted": 15,
          "TotalMatchesCompleted": 4,
          "TotalMatchesWon": 4,
          "TotalMatchesLost": 11,
          "TotalLeaderPowersCast": 494
      },
      "Voridus": {
          "TotalTimePlayed": "PT11H40M31.839S",
          "TotalMatchesStarted": 44,
          "TotalMatchesCompleted": 20,
          "TotalMatchesWon": 19,
          "TotalMatchesLost": 25,
          "TotalLeaderPowersCast": 466
      }
  },
  "GameMode": null,
  "HighestObjectiveScoreByTeamSize": {}
}

export const leaderBoardPerPage = 25