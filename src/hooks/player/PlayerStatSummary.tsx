import { useEffect, useState } from "react"
import { PlayerStatSummary } from "../../interfaces/PlayerStatSummary"
import axios from "../../utils/axios"

export const usePlayerStatSummary = (gamerTag: string) => {
    const [playerStatSummary, setPlayerStatSummary] = useState<PlayerStatSummary>()
    useEffect(() => {
        const getPlayerStat =  async() => { 
            try {
                const response = await axios.get<PlayerStatSummary>(`https://www.haloapi.com/stats/hw2/players/${gamerTag}/stats`)
                setPlayerStatSummary(response.data)
            } catch (e) {
                console.error('fetching player stat', e)
            }
        }
        getPlayerStat();
    },[gamerTag])

    return {playerStatSummary}
}