import { useEffect, useState } from "react"
import { LeaderboardResponse, LeaderboardPlayer } from "../../interfaces/LeaderboardResponse"
import axios from "../../utils/axios"

export const useLeaderboard = (seasonId?: string, playlistId?: string) => {
    const [leaderboardData, setLeaderboardData] = useState<LeaderboardPlayer[]>([])
    useEffect(() => {
        if(!seasonId || !playlistId) return;
        const getLeaderboard =  async() => { 
            try {
                const response = await axios.get<LeaderboardResponse>(`https://www.haloapi.com/stats/hw2/player-leaderboards/csr/${seasonId}/${playlistId}?count=250`)
                setLeaderboardData(response.data.Results as LeaderboardPlayer[])
            } catch (e) {
                console.error('fetching leaderboard', e)
                setLeaderboardData([]);
            }
        }
        getLeaderboard();
    },[seasonId, playlistId])

    return {leaderboardData}
}