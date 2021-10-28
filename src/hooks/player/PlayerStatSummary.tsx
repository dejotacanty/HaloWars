import { useEffect, useState } from "react"
import { PlayerStatSummary } from "../../interfaces/PlayerStatSummary"
import axios from "../../utils/axios"
export const getPlayerStat =  async(gamerTag: string) => { 
    try {
        const response = await axios.get<PlayerStatSummary>(`https://www.haloapi.com/stats/hw2/players/${gamerTag}/stats`)
        return response.data
    } catch (e) {
        console.error('fetching player stat', e)
    }
}
export const usePlayerStatSummary = (gamerTag: string) => {
    const [playerStatSummary, setPlayerStatSummary] = useState<PlayerStatSummary>()
    useEffect(() => {
        getPlayerStat(gamerTag).then((data) => {
            setPlayerStatSummary(data);
        })
    },[gamerTag])

    return {playerStatSummary}
}