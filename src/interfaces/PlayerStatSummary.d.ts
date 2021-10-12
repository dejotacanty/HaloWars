export interface PlayerStatSummary {
  CustomSummary: CustomSummary;
  MatchmakingSummary: MatchmakingSummary;
}
export interface CustomSummary {
  SkirmishStats: SkirmishStats;
  CustomStats: CustomStats;
  CustomModeStats?: (CustomModeStatsEntity)[] | null;
}
export interface SkirmishStats {
  SinglePlayerStats: SinglePlayerStats;
  MultiplayerStats: MultiplayerStats;
  SinglePlayerModeStats?: (SinglePlayerModeStatsEntity)[] | null;
  MultiplayerModeStats?: (MultiplayerModeStatsEntity)[] | null;
}
export interface SinglePlayerStats {
  PlaylistId?: null;
  PlaylistClassification?: null;
  HighestCsr?: null;
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalPointCaptures: number;
  TotalUnitsBuilt: number;
  TotalUnitsLost: number;
  TotalUnitsDestroyed: number;
  TotalCardPlays: number;
  HighestWaveCompleted: number;
  LeaderStats: LeaderStats;
  GameMode?: null;
  HighestObjectiveScoreByTeamSize: HighestObjectiveScoreByTeamSize;
}
export interface LeaderStats {
  Cutter: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Anders: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Atriox: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Forge: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Isabel: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Shipmaster: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Kinsano: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  YapYap: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Johnson: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Serina: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Jerome: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Lekgolo: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Decimus: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Voridus: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Pavium: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Arbiter: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
}

export type AllLeaderStats = LeaderStats | LeaderStats1 | LeaderStats2 |LeaderStats3 |LeaderStats4 |LeaderStats5 |LeaderStats6

export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}

export interface ALeaderStats extends CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter {}
export interface HighestObjectiveScoreByTeamSize {
}
export interface MultiplayerStats {
  PlaylistId?: null;
  PlaylistClassification?: null;
  HighestCsr?: null;
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalPointCaptures: number;
  TotalUnitsBuilt: number;
  TotalUnitsLost: number;
  TotalUnitsDestroyed: number;
  TotalCardPlays: number;
  HighestWaveCompleted: number;
  LeaderStats: LeaderStats1;
  GameMode?: null;
  HighestObjectiveScoreByTeamSize: HighestObjectiveScoreByTeamSize;
}
export interface LeaderStats1 {
  Forge: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Isabel: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Shipmaster: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Cutter: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Voridus: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Arbiter: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
}
export interface SinglePlayerModeStatsEntity {
  PlaylistId?: null;
  PlaylistClassification?: null;
  HighestCsr?: null;
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalPointCaptures: number;
  TotalUnitsBuilt: number;
  TotalUnitsLost: number;
  TotalUnitsDestroyed: number;
  TotalCardPlays: number;
  HighestWaveCompleted: number;
  LeaderStats: LeaderStats2;
  GameMode: number;
  HighestObjectiveScoreByTeamSize: HighestObjectiveScoreByTeamSize1;
}
export interface LeaderStats2 {
  Cutter?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter1 | null;
  Anders?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter2 | null;
  Atriox?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter3 | null;
  Forge?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter4 | null;
  Isabel?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter5 | null;
  Shipmaster?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter6 | null;
  Kinsano?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter7 | null;
  YapYap?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter8 | null;
  Johnson: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Serina?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter9 | null;
  Jerome?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter10 | null;
  Lekgolo?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter11 | null;
  Decimus?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter12 | null;
  Voridus?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter13 | null;
  Pavium?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter14 | null;
  Arbiter?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter15 | null;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter1 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter2 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter3 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter4 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter5 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter6 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter7 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter8 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter9 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter10 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter11 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter12 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter13 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter14 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter15 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface HighestObjectiveScoreByTeamSize1 {
  1: number;
  2?: number | null;
  3?: number | null;
}
export interface MultiplayerModeStatsEntity {
  PlaylistId?: null;
  PlaylistClassification?: null;
  HighestCsr?: null;
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalPointCaptures: number;
  TotalUnitsBuilt: number;
  TotalUnitsLost: number;
  TotalUnitsDestroyed: number;
  TotalCardPlays: number;
  HighestWaveCompleted: number;
  LeaderStats: LeaderStats3;
  GameMode: number;
  HighestObjectiveScoreByTeamSize: HighestObjectiveScoreByTeamSize2;
}
export interface LeaderStats3 {
  Forge?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter16 | null;
  Isabel?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter17 | null;
  Shipmaster?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter18 | null;
  Cutter: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Voridus?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter19 | null;
  Arbiter?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter20 | null;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter16 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter17 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter18 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter19 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter20 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface HighestObjectiveScoreByTeamSize2 {
  2?: number | null;
  3: number;
}
export interface CustomStats {
  PlaylistId?: null;
  PlaylistClassification?: null;
  HighestCsr?: null;
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalPointCaptures: number;
  TotalUnitsBuilt: number;
  TotalUnitsLost: number;
  TotalUnitsDestroyed: number;
  TotalCardPlays: number;
  HighestWaveCompleted: number;
  LeaderStats: LeaderStats4;
  GameMode?: null;
  HighestObjectiveScoreByTeamSize: HighestObjectiveScoreByTeamSize;
}
export interface LeaderStats4 {
  Decimus: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
}
export interface CustomModeStatsEntity {
  PlaylistId?: null;
  PlaylistClassification?: null;
  HighestCsr?: null;
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalPointCaptures: number;
  TotalUnitsBuilt: number;
  TotalUnitsLost: number;
  TotalUnitsDestroyed: number;
  TotalCardPlays: number;
  HighestWaveCompleted: number;
  LeaderStats: LeaderStats4;
  GameMode: number;
  HighestObjectiveScoreByTeamSize: HighestObjectiveScoreByTeamSize3;
}
export interface HighestObjectiveScoreByTeamSize3 {
  1: number;
}
export interface MatchmakingSummary {
  SocialPlaylistStats?: (SocialPlaylistStatsEntity)[] | null;
  RankedPlaylistStats?: (RankedPlaylistStatsEntity)[] | null;
  SocialModeStats?: (SocialModeStatsEntity)[] | null;
  RankedModeStats?: (RankedModeStatsEntity)[] | null;
}
export interface SocialPlaylistStatsEntity {
  PlaylistId: string;
  PlaylistClassification: number;
  HighestCsr?: null;
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalPointCaptures: number;
  TotalUnitsBuilt: number;
  TotalUnitsLost: number;
  TotalUnitsDestroyed: number;
  TotalCardPlays: number;
  HighestWaveCompleted: number;
  LeaderStats: LeaderStats5;
  GameMode?: null;
  HighestObjectiveScoreByTeamSize: HighestObjectiveScoreByTeamSize;
}
export interface LeaderStats5 {
  Cutter?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter21 | null;
  Anders?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter22 | null;
  Atriox?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter23 | null;
  Forge?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter24 | null;
  Isabel?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter25 | null;
  Shipmaster?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter26 | null;
  Kinsano?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter27 | null;
  YapYap?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter28 | null;
  Johnson?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter29 | null;
  Serina?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter30 | null;
  Jerome?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter31 | null;
  Lekgolo?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter32 | null;
  Decimus?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter33 | null;
  Voridus?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter34 | null;
  Pavium?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter35 | null;
  Arbiter?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter36 | null;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter21 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter22 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter23 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter24 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter25 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter26 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter27 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter28 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter29 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter30 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter31 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter32 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter33 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter34 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter35 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter36 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface RankedPlaylistStatsEntity {
  PlaylistId: string;
  PlaylistClassification: number;
  HighestCsr: HighestCsr;
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalPointCaptures: number;
  TotalUnitsBuilt: number;
  TotalUnitsLost: number;
  TotalUnitsDestroyed: number;
  TotalCardPlays: number;
  HighestWaveCompleted: number;
  LeaderStats: LeaderStats6;
  GameMode?: null;
  HighestObjectiveScoreByTeamSize: HighestObjectiveScoreByTeamSize;
}
export interface HighestCsr {
  Tier: number;
  Designation: number;
  Raw: number;
  PercentToNextTier: number;
  MeasurementMatchesRemaining: number;
  Rank?: number | null;
}
export interface LeaderStats6 {
  Cutter: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Anders: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Atriox: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Forge: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Isabel?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter37 | null;
  Shipmaster: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Kinsano: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  YapYap: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Johnson?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter38 | null;
  Serina: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Jerome: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Lekgolo: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Decimus: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Voridus: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
  Pavium?: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter39 | null;
  Arbiter: CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter37 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter38 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface CutterOrAndersOrAtrioxOrForgeOrIsabelOrShipmasterOrKinsanoOrYapYapOrJohnsonOrSerinaOrJeromeOrLekgoloOrDecimusOrVoridusOrPaviumOrArbiter39 {
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalLeaderPowersCast: number;
}
export interface SocialModeStatsEntity {
  PlaylistId?: null;
  PlaylistClassification?: null;
  HighestCsr?: null;
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalPointCaptures: number;
  TotalUnitsBuilt: number;
  TotalUnitsLost: number;
  TotalUnitsDestroyed: number;
  TotalCardPlays: number;
  HighestWaveCompleted: number;
  LeaderStats: LeaderStats2;
  GameMode: number;
  HighestObjectiveScoreByTeamSize: HighestObjectiveScoreByTeamSize2;
}
export interface RankedModeStatsEntity {
  PlaylistId?: null;
  PlaylistClassification?: null;
  HighestCsr?: null;
  TotalTimePlayed: string;
  TotalMatchesStarted: number;
  TotalMatchesCompleted: number;
  TotalMatchesWon: number;
  TotalMatchesLost: number;
  TotalPointCaptures: number;
  TotalUnitsBuilt: number;
  TotalUnitsLost: number;
  TotalUnitsDestroyed: number;
  TotalCardPlays: number;
  HighestWaveCompleted: number;
  LeaderStats: LeaderStats;
  GameMode: number;
  HighestObjectiveScoreByTeamSize: HighestObjectiveScoreByTeamSize4;
}
export interface HighestObjectiveScoreByTeamSize4 {
  1: number;
  2: number;
  3: number;
}
