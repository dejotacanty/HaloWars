interface IHaloPlaylist {
    id: string,
    name: string
}

interface IHaloSeasonMap {
    id: string,
    playlists: string[],
}

export const SEASON_15_ID = "85230310-c1ab-4da6-a177-e2a3da97ca2d";
const SEASON_14 = "07336d19-12b2-4eb3-9c77-8e43745f1a25";
const PLAYLIST_1V1_BLITZ = "effd0965-78b2-4c65-a0d0-afc193c98f4a"
export const PLAYLIST_2V2_RANKED = "379f9ee5-92ec-45d9-b5e5-9f30236cab00"
const PLAYLIST_1v1_RANKED = "548d864e-8666-430e-9140-8dd2ad8fbfcd"
const PLAYLIST_2V2_BLITZ = "2b69cc16-8cd7-45fe-bf3c-b2b360d50296"
const PLAYLIST_2v2_OBJ = "02df2dd4-9308-4470-a6a5-578cca17987b"
const PLAYLIST_3v3_RANKED = "4a2cedcc-9098-4728-886f-60649896278d"

export const seasonMapping: {[key: string]: string[]} = {
    [SEASON_15_ID]: [
        PLAYLIST_1V1_BLITZ,
        PLAYLIST_2V2_RANKED,
        PLAYLIST_1v1_RANKED,
        PLAYLIST_2V2_BLITZ,
        PLAYLIST_2v2_OBJ,
        PLAYLIST_3v3_RANKED
    ],
    [SEASON_14]: [
        PLAYLIST_1V1_BLITZ,
        PLAYLIST_2V2_RANKED,
        PLAYLIST_1v1_RANKED,
        PLAYLIST_2V2_BLITZ,
        PLAYLIST_2v2_OBJ,
        PLAYLIST_3v3_RANKED
    ]
}
