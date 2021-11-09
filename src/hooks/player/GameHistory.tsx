import { useEffect, useState } from "react"
import { IGameHistoryResponse } from "../../interfaces/GameHistory"
import axios from "../../utils/axios"

export const useGameHistory = (gamerTag: string, startAt: number, count: number, matchType?: 'custom' | 'matchmaking') => {
    const [gameHistory, setGameHistory] = useState<IGameHistoryResponse>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setIsLoading(true)
        const getPlayerStat =  async() => { 
            try {
                const response = await axios.get<IGameHistoryResponse>(`https://www.haloapi.com/stats/hw2/players/${gamerTag}/matches?start=${startAt}&count=${count}${matchType ? `&matchType=${matchType}` : ''}`)
                setGameHistory(response.data)
                setIsLoading(false)
            } catch (e) {
                setGameHistory(undefined)
                setIsLoading(false)
                console.error('fetching player stat', e)
            }
        }
        getPlayerStat();
    },[gamerTag, startAt])

    return {gameHistory, isLoading}
}