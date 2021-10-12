export interface Season {
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
  HW2Season: HW2Season;
}
export interface Common {
  Owner: string;
  CreatedUtc: string;
  ModifiedUtc: string;
  PublishedUtc: string;
  Container: number;
}
export interface HW2Season {
  StartDate: string;
  DisplayInfo: DisplayInfo;
  Image: ImageOrImage4K;
  Playlists?: (PlaylistsEntity | null)[] | null;
  Image4K: Image4K;
  CsrSettings: CsrSettings;
}
export interface DisplayInfo {
  Id: number;
  Type: string;
  View: View1;
}
export interface View1 {
  Status: string;
  Common: Common;
  Identity: string;
  Title: string;
  HW2SeasonDisplayInfo: HW2SeasonDisplayInfo;
  BatchLocalization: BatchLocalization;
  Localization: Localization;
}
export interface HW2SeasonDisplayInfo {
  Name: string;
  Description: string;
}
export interface BatchLocalization {
  IsLocked: boolean;
}
export interface Localization {
  Culture: string;
  MasterContentItemId: string;
}
export interface ImageOrImage4K {
  Id: number;
  Type: string;
  View: View2;
}
export interface View2 {
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
export interface PlaylistsEntity {
  Id: number;
  Type: string;
  Identity: string;
  Autoroute: string;
}
export interface Image4K {
  Id?: number | null;
  Type?: string | null;
  View?: View3 | null;
}
export interface View3 {
  Status: string;
  Common: Common;
  Media: Media;
  Image: Image;
  Title: string;
  Identity: string;
}
export interface CsrSettings {
  Id: number;
  Type: string;
  View: View4;
}
export interface View4 {
  Status: string;
  Common: Common;
  Identity: string;
  Title: string;
  SeasonCsrSettings: SeasonCsrSettings;
}
export interface SeasonCsrSettings {
  ProStartingCsr: number;
  MaxInitialCsr: number;
  InitialCsrAdjustment: number;
}
export interface LinksEntity {
  Absolute: boolean;
  Relation: string;
  URI: string;
}
