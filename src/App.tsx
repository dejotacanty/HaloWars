import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { ServiceRecord } from "./components/ServiceRecord";
import { Leaderboard } from "./components/LeaderBoard/Leaderboard";
import { NavBar } from "./components/layout/Navbar";
import { GameHistory } from "./components/GameHistory";
import { Game } from "./components/Game";
import { useEffect, useState } from "react";
import { GlobalContext } from "./context/context";
import { useQuery } from "./utils/helpers";
import { usePageTracking } from "./hooks/usePageTracking";
import ReactGA from "react-ga";

function App() {
  return (
    <Router>
      <QueryParams />
    </Router>
  );
}

function QueryParams() {
  usePageTracking()
  let query = useQuery();
  const isPWA = query.get('isPWA')
  let initalGamerTag = "";
  const queryGamerTag = query.get("gamerTag");
  const localStorageGamerTag = localStorage.getItem("gamerTag");
  if (queryGamerTag !== null) {
    initalGamerTag = queryGamerTag;
  } else {
    if (localStorageGamerTag) {
      initalGamerTag = localStorageGamerTag;
    }
  }

  useEffect(() => {
    if(isPWA && isPWA === "true") {
      ReactGA.event({
        category: 'User',
        action: 'Opened with PWA'
      })
    } else {
      ReactGA.event({
        category: 'User',
        action: 'Opened on Browser'
      })
    }
  }, [])
  const [gamerTag, setGamerTag] = useState<string>(initalGamerTag);
  const [match, setMatch] = useState<string>("");
  const value = { gamerTag, setGamerTag, match, setMatch };
  
  //works when search bar is updated
  useEffect(() => {
    if (gamerTag) {
      localStorage.setItem("gamerTag", gamerTag);
    }
  }, [gamerTag]);

  //works when link is navigated with this param
  useEffect(() => {
    if(queryGamerTag) {
      setGamerTag(queryGamerTag)
    }
  }, [queryGamerTag])

  return (
    <div>
      <GlobalContext.Provider value={value}>
        <NavBar></NavBar>

        <Switch>
          <Route path="/leaderboards">
            <Leaderboard />
          </Route>
          <Route path="/game-history">
            <GameHistory />
          </Route>
          <Route path="/service-record">
            <ServiceRecord />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <ServiceRecord />
          </Route>
        </Switch>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
