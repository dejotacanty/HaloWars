import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { playlists } from "../data/playlists";
import { seasonData } from "../data/seasons";
import { addHyphens } from "../utils/entries";
import { useLeaderboard } from "../hooks/metadata/Leaderboard";
import { HaloTable } from "./Table";
import { PLAYLIST_2V2_RANKED, seasonMapping, SEASON_15_ID } from "../data/mappings";

export const Leaderboard = () => {

    const [seasonId, setSeasonId] = useState<string>(SEASON_15_ID)
    const [playlistId, setPlaylistId] = useState<string>(PLAYLIST_2V2_RANKED)

    const {leaderboardData} = useLeaderboard(seasonId, playlistId)

    useEffect(() => {
        console.log({seasonId, playlistId})
    }, [seasonId, playlistId])

    return (
        <div>
            <h1>Leader Board</h1>
            <Form.Control
            as="select"
            onChange={(e) => setSeasonId(e.target.value)}>
                {seasonData.map((season) => {
                return <option value={addHyphens(season.View.Identity)}>{season.View.HW2Season.DisplayInfo.View.HW2SeasonDisplayInfo.Name}</option>
            })}
            </Form.Control> 
            <Form.Control
            as="select"
            onChange={(e) => setPlaylistId(e.target.value)}>
                {playlists.filter((pl) => seasonMapping[seasonId] ? seasonMapping[seasonId].includes(addHyphens(pl.View.Identity)) : false).map((pl) => {
                return <option value={addHyphens(pl.View.Identity)}>{pl.View.HW2Playlist.DisplayInfo.View.HW2PlaylistDisplayInfo.WebDisplayName}</option>
            })}
            </Form.Control> 
            {leaderboardData && 
            <HaloTable data={leaderboardData}></HaloTable>
}
        </div>
    )

}