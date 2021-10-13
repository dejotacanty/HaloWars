import './Navbar.css';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

export const NavBar = () => {

  const smallImg = "https://image.halocdn.com/?path=https:%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-wars-2%2fheroes%2f006[1]-5ec9ade07bb14144b919219e5cd1f3c0.jpg&leftCrop=560&rightCrop=560&hash=m0t4264DV5ZVV%2fgG5ZxmACzsiSjO0Q9UqTaGVSqPsSU%3d"
  const img = "https://image.halocdn.com/?path=https:%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-wars-2%2fheroes%2f006[1]-5ec9ade07bb14144b919219e5cd1f3c0.jpg&leftCrop=400&rightCrop=400&hash=Xd3qdWdiVgB%2bqPXH%2fsv9TWf4XpmqFx4%2fEsgAbLzHYbc%3d";
  const fullImg = "https://content.halocdn.com/media/Default/games/halo-wars-2/heroes/006[1]-5ec9ade07bb14144b919219e5cd1f3c0.jpg"
    return (
      <div>
       <header id="site-header" className="dark">
        <div className="header-position">
          <div className="header-contain">
            <div className="header-wrapper">
            <a className="header--item site-brand" href="https://www.halowaypoint.com/en-gb" title="Home" data-analytics="Site:Header/WaypointHomeLink">
                    <img src="//w.halocdn.com/content/Images/halo-logo-2x.png" alt="Halo"/>
                </a>
            </div>
          </div>
        </div>
       </header>
<div className="hero--short dark hero has-media  has-filters has-nav" data-cms-id="334558" id="334558">
  <div className="media-wrapper media--short">
    <div className="media-aspect">
      <div className="media-offset media-image">
      <img srcSet={smallImg + " 800w, " +
             img + " 1120w, " + fullImg}
     sizes="(max-width: 800px) 800px,
            (max-width: 1120px) 1120px"
     alt="Halo wars cover"/>
            </div>
            </div>
            </div>
            <div className="content-wrapper">
              <div className="reserved">
                <div className="content"></div>
                </div>
                <div className="content-offset">
                  <div className="content">            
                  <h4 className="text--small">Games</h4>
            <h1 className="text--largest">
Halo Wars 2            </h1>
<nav data-dropdown="" className="nav-link">
                <a href="#" data-dnt="">Service Record</a>
                <ul>
                                    <li className=""><a href="https://www.halowaypoint.com/en-gb/games/halo-wars-2"><span>Overview</span></a></li>
                                    <li className="selected"><a href="https://www.halowaypoint.com/en-gb/games/halo-wars-2/service-record/players/warnster" className="selected"><span>Service Record</span></a></li>
                                    <li className=""><a href="https://www.halowaypoint.com/en-gb/games/halo-wars-2/game-history/players/warnster?gameModeFilter=All&amp;start=0&amp;count=10"><span>Game History</span></a></li>
                                    <li className=""><a href="https://www.halowaypoint.com/en-gb/games/halo-wars-2/leaderboards"><span>Leaderboards</span></a></li>
                                    <li className=""><a href="https://www.halowaypoint.com/en-gb/games/halo-wars-2/blitz/decks/players/warnster"><span>Blitz</span></a></li>
                                    <li className=""><a href="/en-us/forums/38bd6e2ebbb14e5b9b359bb029588800/topics"><span>Forums</span></a></li>

                </ul>
            </nav>
</div>
</div>
</div>
</div>
</div>
    )
}