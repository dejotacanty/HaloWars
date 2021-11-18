export interface LeaderboardResponse {
  Start: number;
  Count: number;
  ResultCount: number;
  Results?: (ResultsEntity)[] | null;
  Links: Links;
}
export interface LeaderboardPlayer {
  Player: Player;
  Rank: number;
  Score: Score;
  Wins: TotalWins;
  Losses:TotalLosses;
}
export interface Player {
  Gamertag: string;
  Xuid?: null;
}
export interface Score {
  Tier: number;
  DesignationId: number;
  Csr: number;
  PercentToNextTier: number;
  Rank: number;
}
export interface TotalWins {
  TotalMatchesWon: number;
}
export interface TotalLosses {
  TotalMatchesLost: number;
}
export interface Links {
  Self: Self;
}
export interface Self {
  AuthorityId: string;
  Path: string;
  QueryString: string;
  RetryPolicyId: string;
  TopicName: string;
  AcknowledgementTypeId: number;
  AuthenticationLifetimeExtensionSupported: boolean;
  ClearanceAware: boolean;
}
