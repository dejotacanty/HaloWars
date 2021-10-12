import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './components/Home';
import { Leaderboard } from './components/Leaderboard';
import { NavBar } from './components/layout/Navbar';

function App() {
  return (
    <Router>
        <NavBar></NavBar>

        <Switch>
          <Route path="/leaderboards">
            <Leaderboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
