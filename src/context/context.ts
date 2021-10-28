import { createContext, Dispatch, SetStateAction } from "react";

export interface IGlobalContext {
    gamerTag: string,
    setGamerTag: Dispatch<SetStateAction<string>>,
    match: string,
    setMatch: Dispatch<SetStateAction<string>>,
}

export const GlobalContext = createContext<IGlobalContext>({
    gamerTag: "", 
    setGamerTag: () => {},
    match: "", 
    setMatch: () => {}
});