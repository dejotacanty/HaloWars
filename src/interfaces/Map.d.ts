// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface HaloMap {
    ID:          string;
    DisplayInfo: DisplayInfo;
    Image:       TmpImage;
}

export interface DisplayInfo {
    Id:   number;
    Type: DisplayInfoType;
    View: DisplayInfoView;
}

export type DisplayInfoType = "HW2MapDisplayInfo"

export interface DisplayInfoView {
    Status:            Status;
    Common:            Common;
    Identity:          string;
    BatchLocalization: BatchLocalization;
    Localization:      Localization;
    Title:             string;
    HW2MapDisplayInfo: HW2MapDisplayInfo;
}

export interface BatchLocalization {
    IsLocked: boolean;
}

export interface Common {
    Owner:        any;
    CreatedUtc:   string;
    ModifiedUtc:  string;
    PublishedUtc: string;
    Container:    number;
}

export interface HW2MapDisplayInfo {
    Name:        string;
    Description: string;
}

export interface Localization {
    Culture:             any;
    MasterContentItemId: string;
}

export interface TmpImage {
    Id:   number;
    Type: "Image";
    View: ImageView;
}


export interface ImageView {
    Status:   string;
    Common:   Common;
    Media:    Media;
    Image:    ViewImage;
    Title:    string;
    Identity: string;
}

export interface ViewImage {
    Width:  number;
    Height: number;
}

export interface Media {
    MediaUrl:      string;
    MediaUrl700?:      string;
    MimeType:      MIMEType;
    Caption:       string;
    AlternateText: string;
    FolderPath:    string;
    FileName:      string;
}
export type MIMEType  = "image/jpeg"
