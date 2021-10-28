import { useEffect, useState } from "react"
import axios from "../../utils/axios"

export const useGameObject = () => {
    const [gameObjects, setGameObjects] = useState<any>()
    useEffect(() => {
        const getMatch =  async() => { 
            try {
                const promise1 = axios.get<any>(`https://www.haloapi.com/metadata/hw2/game-objects?startAt=0`)
                const promise2 = axios.get<any>(`https://www.haloapi.com/metadata/hw2/game-objects?startAt=100`)
                const promise3 = axios.get<any>(`https://www.haloapi.com/metadata/hw2/game-objects?startAt=200`)
                const promise4 = axios.get<any>(`https://www.haloapi.com/metadata/hw2/game-objects?startAt=300`)
                //ranks display updated csr, designation map to HW2CsrDesignation and tier to the containing Tier
                const result = await Promise.all([promise1, promise2,promise3, promise4])
                const tmpGameObject = [...result[0].data.ContentItems,...result[1].data.ContentItems,...result[2].data.ContentItems,...result[3].data.ContentItems]
                const formattedObject: any = {}
                tmpGameObject.forEach((go) => {
                    formattedObject[go.View.HW2Object.ObjectTypeId] = go.View.HW2Object
                })
                console.log({formattedObject})
            } catch (e) {
                console.error('fetching match stat', e)
            }
        }
        getMatch();
    }, [])
    return {gameObjects}
}