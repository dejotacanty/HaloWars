import { useEffect, useState } from "react"
import { IGameHistoryResponse } from "../../interfaces/GameHistory"
import axios from "../../utils/axios"

export const useGameHistory = (gamerTag: string, startAt: number, count: number, matchType?: 'custom' | 'matchmaking') => {
    const [gameHistory, setGameHistory] = useState<IGameHistoryResponse>()
    useEffect(() => {
        const getPlayerStat =  async() => { 
            try {
                const response = await axios.get<IGameHistoryResponse>(`https://www.haloapi.com/stats/hw2/players/${gamerTag}/matches?start=${startAt}&count=${count}${matchType ? `&matchType=${matchType}` : ''}`)
                setGameHistory(response.data)
            } catch (e) {
                console.error('fetching player stat', e)
            }
        }
        getPlayerStat();
        console.log('getting player stats')
    },[gamerTag, startAt])

    return {gameHistory}
}