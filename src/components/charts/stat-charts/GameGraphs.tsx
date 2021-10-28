import { useCallback, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IFilter, Legend as GraphLegend } from "./Legend";
import { Match, ResourceHeartBeat } from "../../../interfaces/Match";
import { entries } from "../../../utils/entries";
import {
  calculatePopulation,
  calculateSuppyRate,
  GraphType,
  ResourceData,
} from "../../../utils/graph_helper";
import {
  getPlayersByTeam,
  millisToMinutesAndSeconds,
  teamPlayerColourMaps,
} from "../../../utils/helpers";
import { GraphSelect } from "./GraphSelect";

interface GameGraphProps {
  match: Match;
  data: {
    supplyData: ResourceData[];
    powerData: ResourceData[];
    populationData: ResourceData[];
  };
}

export const GameGraphs = ({ match, data }: GameGraphProps) => {
  const [graphType, setGraphType] = useState<GraphType>(
    "population"
  );

  const [filters, setFilters] = useState<IFilter>({});

  let data1: any[] = [];
  match.events.forEach((e) => {
    if (e.EventName !== "ResourceHeartbeat") return;

    let playerObject: any = {};
    for (const [key, player] of entries(e.PlayerResources)) {
      const selectPlayer = match.Players[key];
      playerObject[selectPlayer.HumanPlayerId.Gamertag] = player.Supply;
    }
    playerObject.time = millisToMinutesAndSeconds(e.TimeSinceStartMilliseconds);
    data1.push(playerObject);
  });

  let chartData: ResourceData[];
  switch (graphType) {
    case "supply":
      chartData = data.supplyData;
      break;
    case "power":
      chartData = data.powerData;
      break;
    case "population":
      chartData = data.populationData;
      break;
    default:
      chartData = data.supplyData;
  }

  const { team1Players, team2Players } = getPlayersByTeam(match.Players);

  return (
    <div>
      <GraphSelect onSelect={(gType) => {setGraphType(gType)}}/>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          style={{ fontSize: "16px" }}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis
            label={{ value: graphType, angle: -90, position: "insideLeft" }}
          />
          <Tooltip isAnimationActive={false} />
          {Object.keys(match.Players).map((key) => {
            const player = match.Players[key];
            if (filters[Number(key)]) {
              return (
                <Line
                  isAnimationActive={false}
                  type="monotone"
                  dataKey={player.HumanPlayerId.Gamertag}
                  stroke={
                    teamPlayerColourMaps[player.TeamId][player.TeamPlayerIndex]
                  }
                />
              );
            }
          })}
          {/* {refAreaLeft && refAreaRight ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
            ) : null} */}
        </LineChart>
      </ResponsiveContainer>
      <h4
        style={{ textAlign: "center" }}
        className="chart-label-x text--smallest"
      >
        Time
      </h4>
      <GraphLegend
        team1Players={team1Players}
        team2Players={team2Players}
        onFilterChange={(f) => setFilters(f)}
      />
    </div>
  );
};
