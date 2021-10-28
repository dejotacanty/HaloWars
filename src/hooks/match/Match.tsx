import { useEffect, useState } from "react"
import axios from "../../utils/axios"
import {Match} from '../../interfaces/Match'

export const useMatch = (matchId: string) => {
    const [match, setMatch] = useState<Match>()
    useEffect(() => {
        const getMatch =  async() => { 
            try {
                const promise1 = axios.get<Match>(`https://www.haloapi.com/stats/hw2/matches/${matchId}`)
                const promise2 = axios.get<any>(`https://www.haloapi.com/stats/hw2/matches/${matchId}/events`)
                //ranks display updated csr, designation map to HW2CsrDesignation and tier to the containing Tier
                const result = await Promise.all([promise1, promise2])
                const tmpMatch = result[0].data;
                tmpMatch.events = result[1].data.GameEvents
                setMatch(tmpMatch)
            } catch (e) {
                console.error('fetching match stat', e)
            }
        }
        getMatch();
    }, [])
    return {match}
}