import { useEffect, useState } from "react"
import { MmrResposne, ResultElement, ResultResult } from "../../interfaces/MMR"
import axios from "../../utils/axios"

//accepts comma seperated gamerTags names
export const usePlayerXp = (players: string, playlistId?: string) => {

    const [playerXp, setPlayerXp] = useState<ResultElement[]>()

    const getPlayerXp = async (players: string, playlistId: string) => {
        try {
            const response = await axios.get<MmrResposne>(`https://www.haloapi.com/stats/hw2/playlist/${playlistId}/rating?players=${players}`)
            if(response.data.Results && response.data.Results.length > 0) {
                setPlayerXp(response.data.Results)
            }
        } catch (e) {
            console.error('fetching player xp', e)
        }
    }

    useEffect(() => {
        if(!players || !playlistId  || playlistId === "00000000-0000-0000-0000-000000000000") return;
        getPlayerXp(players, playlistId);
    }, [players, playlistId])

    return {playerXp}
}