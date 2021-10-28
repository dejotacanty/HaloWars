export interface IGameData {
    gamerTag: string,
    csr: number,
    unitsBuilt: number,
    unitsLost: number,
    enemyUnitsKilled: number,
    basesBuilt: number,
    basesDestroyed: number,
    buildingsDestroyed: number,
    suppliesGenerated: number,
    //second table
    energyGenerated: number,
    maxPopReached: number,
    maxTechLevelReached: number,
    supplyGeneratorsBuilt: number,
    eneryGeneratorsBuilt: number,
    //third table
    activeLeaderPowersUsed: number,
    killsWithLeaderPowers: number,
    leaderPointsSpent: number,
    leaderPowerUnitsSpawned: number
}