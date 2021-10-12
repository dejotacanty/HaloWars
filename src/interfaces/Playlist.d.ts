export interface Playlist {
  Id: number;
  Type: string;
  View: View;
  Links?: (LinksEntity)[] | null;
  ChildrenCount: number;
}
export interface View {
  Status: string;
  Common: Common;
  Identity: string;
  Title: string;
  HW2Playlist: HW2Playlist;
  Autoroute: string;
}
export interface Common {
  Owner: string;
  CreatedUtc: string;
  ModifiedUtc: string;
  PublishedUtc: string;
  Container: number;
}
export interface HW2Playlist {
  ComputerDifficulty: ComputerDifficulty;
  CardsFixedAtLevel: CardsFixedAtLevel;
  Id: string;
  Image: ImageOrThumbnailImage;
  ThumbnailImage: ImageOrThumbnailImage;
  MaxPartySize: number;
  MinPartySize: number;
  UsesBanRules: boolean;
  MatchTicketTimeoutDurationSeconds: number;
  MpsdHopperName: string;
  MpsdHopperStatName: string;
  Voting: boolean;
  PlaylistEntries?: (PlaylistEntriesEntity)[] | null;
  MaxPlayerCount: number;
  MinPlayerCount: number;
  IsTeamGamePlaylist: boolean;
  LonelyPartyUsesWildcard: boolean;
  IsNew: boolean;
  Hide: boolean;
  IsQuickmatchPlaylist: boolean;
  StatsClassification: string;
  DisplayInfo: DisplayInfo;
  TargetPlatform: string;
  isCrossplay: boolean;
  FirefightRulesetToUse: FirefightRulesetToUse;
}
export interface ComputerDifficulty {
  Id?: number | null;
  Type?: string | null;
  View?: View1 | null;
}
export interface View1 {
  Status: string;
  Title: string;
  HW2Difficulty: HW2Difficulty;
  Common: Common;
  Identity: string;
}
export interface HW2Difficulty {
  DisplayInfo: DisplayInfo1;
  ID: number;
}
export interface DisplayInfo1 {
  Id: number;
  Type: string;
  View: View2;
}
export interface View2 {
  Status: string;
  Common: Common;
  Identity: string;
  BatchLocalization: BatchLocalization;
  Localization: Localization;
  Title: string;
  HW2DifficultyDisplayInfo: HW2MapDisplayInfoOrHW2DifficultyDisplayInfo;
}
export interface BatchLocalization {
  IsLocked: boolean;
}
export interface Localization {
  Culture: string;
  MasterContentItemId: string;
}
export interface HW2MapDisplayInfoOrHW2DifficultyDisplayInfo {
  Name: string;
  Description: string;
}
export interface CardsFixedAtLevel {
  Id?: number | null;
  Type?: string | null;
  View?: View3 | null;
}
export interface View3 {
  Status: string;
  Common: Common;
  Identity: string;
  Title: string;
  HW2CardLevel: HW2CardLevel;
}
export interface HW2CardLevel {
  TotalCardCountRequired: number;
  Level: number;
}
export interface ImageOrThumbnailImage {
  Id: number;
  Type: string;
  View: View4;
}
export interface View4 {
  Status: string;
  Common: Common;
  Media: Media;
  Image: Image;
  Title: string;
  Identity: string;
}
export interface Media {
  MediaUrl: string;
  MimeType: string;
  Caption: string;
  AlternateText: string;
  FolderPath: string;
  FileName: string;
}
export interface Image {
  Width: number;
  Height: number;
}
export interface PlaylistEntriesEntity {
  Id: number;
  Type: string;
  View: View5;
}
export interface View5 {
  Status: string;
  Common: Common;
  Identity: string;
  Title: string;
  HW2PlaylistEntry: HW2PlaylistEntry;
}
export interface HW2PlaylistEntry {
  Weight: number;
  VotingSlot: number;
  GameMode: string;
  Map?: (MapEntity)[] | null;
  MaxPlayers: number;
}
export interface MapEntity {
  Id: number;
  Type: string;
  View: View6;
}
export interface View6 {
  Status: string;
  Common: Common;
  Identity: string;
  Title: string;
  HW2Map: HW2Map;
}
export interface HW2Map {
  ID: string;
  DisplayInfo: DisplayInfo2;
  Image: ImageOrThumbnailImage;
}
export interface DisplayInfo2 {
  Id: number;
  Type: string;
  View: View7;
}
export interface View7 {
  Status: string;
  Common: Common;
  Identity: string;
  BatchLocalization: BatchLocalization;
  Localization: Localization;
  Title: string;
  HW2MapDisplayInfo: HW2MapDisplayInfoOrHW2DifficultyDisplayInfo;
}
export interface DisplayInfo {
  Id: number;
  Type: string;
  View: View8;
}
export interface View8 {
  Status: string;
  Common: Common;
  Identity: string;
  Localization: Localization;
  Title: string;
  HW2PlaylistDisplayInfo: HW2PlaylistDisplayInfo;
  BatchLocalization: BatchLocalization;
}
export interface HW2PlaylistDisplayInfo {
  Name: string;
  Description: string;
  WebDisplayName: string;
}
export interface FirefightRulesetToUse {
  Id?: number | null;
  Type?: string | null;
  Identity?: string | null;
}
export interface LinksEntity {
  Absolute: boolean;
  Relation: string;
  URI: string;
}
