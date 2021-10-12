import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ServiceRecord } from './components/ServiceRecord';
import { Leaderboard } from './components/Leaderboard';
import { NavBar } from './components/layout/Navbar';
import { GameHistory } from './components/GameHistory';

function App() {
  return (
    <Router>
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
          <Route path="/">
            <ServiceRecord />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
