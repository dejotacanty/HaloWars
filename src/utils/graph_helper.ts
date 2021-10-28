import { PieChartData } from "../interfaces/Chart";
import { Player, PlayerResource, ResourceHeartBeat } from "../interfaces/Match";
import { entries } from "./entries";
import { millisToMinutesAndSeconds } from "./helpers";

export interface ResourceData {
  time: string | number;
  [key: string]: number | string;
}

export const  calculatePopulation = (
  events: ResourceHeartBeat[],
  players: { [key: string]: Player }
  ) => {
    const playerResources: ResourceData[] = [];
    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      const newData: ResourceData = {
        time: millisToMinutesAndSeconds(event.TimeSinceStartMilliseconds),
      };
      for (const [key, resource] of entries(event.PlayerResources)) {
        newData[players[key].HumanPlayerId.Gamertag] = resource.Population;
      }
      playerResources.push(newData)
  }
  return playerResources;

}

export const calculateSuppyRate = (
  events: ResourceHeartBeat[],
  players: { [key: string]: Player },
  type: 'supply' | 'power'
) => {
  const playerResources: ResourceData[] = [];
  const startingSupply = type === 'supply' ? 600 : 400;
  const resourceKey = type === 'supply' ? 'TotalSupply' : 'TotalEnergy'
  let previousResourceTracker: { [key: string]: PlayerResource } = {};
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const newData: ResourceData = {
      time: event.TimeSinceStartMilliseconds,
    };
    let isNegativeSet = false;
    for (const [key, resource] of entries(event.PlayerResources)) {
      let supply: number = 0;
      if (playerResources.length === 0) {
        supply = resource[resourceKey] - startingSupply;
      } else {
        supply =
          resource[resourceKey] -
          previousResourceTracker[Number(key)][resourceKey];
      }
      newData[players[key].HumanPlayerId.Gamertag] = Math.round(supply);
      //Checks if supply has gone negative and does not add it
      if (supply < 0) {
        isNegativeSet = true;
        break;
      }
    }
    if (isNegativeSet === false) {
      playerResources.push(newData);
      previousResourceTracker = event.PlayerResources;
    }
  }
  const refinedPlayerResources: ResourceData[] = [];
  for (let i = 0; i < playerResources.length; i++) {
    const resource = JSON.parse(JSON.stringify(playerResources[i]));
    if (Number(resource.time) < 90000) {
      resource.time = millisToMinutesAndSeconds(Number(resource.time));
      refinedPlayerResources.push(resource);
      continue;
    }

    const previousResource = playerResources[i - 1];

    let skipAddingResource = false;
    for (const [gamerTag, r] of entries(resource)) {
      //Checks if the supply rate has increased abnormally high and skips the insert
      //to stop anomolies displaying in data
      if (Number(previousResource[gamerTag]) * 2 < r) {
        skipAddingResource = true;
      }
    }
    if (skipAddingResource === false) {
      resource.time = millisToMinutesAndSeconds(Number(resource.time));
      refinedPlayerResources.push(resource);
    }
  }
  return refinedPlayerResources;
};

export const GraphOptions = {
  'population': 'population',
  'supply': 'supply income rate',
  'power': 'enery income rate',
}

export type GraphType = 'supply' | 'power' | 'population'