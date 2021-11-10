import { useContext, useState } from "react"
import { GlobalContext } from "../../context/context"
import { PLAYLIST_1v1_RANKED, PLAYLIST_2V2_RANKED, SEASON_15_ID } from "../../data/mappings"
import { useLeaderboard } from "../../hooks/metadata/Leaderboard"
import { LeaderboardPlayer } from "../../interfaces/LeaderboardResponse"
import { addHyphens } from "../../utils/entries"
import { leaderBoardPerPage } from "../../utils/helpers"
import { Page } from "../layout/Page"
import { LeaderTable } from "./leader-table/LeaderTable"
import { Pagination } from "./Pagination"
import { PlayerInfo } from "./PlyaerInfo"
import { Sidebar } from "./Sidebar"

export const Leaderboard = () => {

    const [seasonId, setSeasonId] = useState<string>(SEASON_15_ID)
    const [playlistId, setPlaylistId] = useState<string>(PLAYLIST_1v1_RANKED)

    const {leaderboardData} = useLeaderboard(seasonId, playlistId)

    const {gamerTag} = useContext(GlobalContext)

    const [page, setPage] = useState(0)

    const leaderPlayers = leaderboardData.slice(page * leaderBoardPerPage, page * leaderBoardPerPage + leaderBoardPerPage);
    if(page === 0) {
        const warnsterTopPlayer: LeaderboardPlayer = {
            "Player": {
                "Gamertag": "Warnster",
                "Xuid": null
            },
            "Rank": 0,
            "Score": {
                "Tier": 1,
                "DesignationId": 7,
                "Csr": leaderPlayers[0].Score.Csr + 50,
                "PercentToNextTier": 0,
                "Rank": 0
            }
        }
        leaderPlayers.unshift(warnsterTopPlayer)
    }
    return (
        <Page title="Leaderboard">
            <div className="region">
                <div className="content">
                    <div className="hw2--leaderboards">
                        <Sidebar onPlaylist={(playlist) => setPlaylistId(addHyphens(playlist.View.Identity))}/>
                        <div className="leaderboard">
                            <Pagination page={page} total={leaderboardData.length} onChange={(page) => setPage(page)}/>
                            <PlayerInfo gamerTag={gamerTag}/>
                            <LeaderTable leaderPlayers={leaderPlayers}/>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}