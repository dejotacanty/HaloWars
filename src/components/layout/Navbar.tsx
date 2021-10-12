import './Navbar.css';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

export const NavBar = () => {

  const smallImg = "https://image.halocdn.com/?path=https:%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-wars-2%2fheroes%2f006[1]-5ec9ade07bb14144b919219e5cd1f3c0.jpg&leftCrop=560&rightCrop=560&hash=m0t4264DV5ZVV%2fgG5ZxmACzsiSjO0Q9UqTaGVSqPsSU%3d"
  const img = "https://image.halocdn.com/?path=https:%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-wars-2%2fheroes%2f006[1]-5ec9ade07bb14144b919219e5cd1f3c0.jpg&leftCrop=400&rightCrop=400&hash=Xd3qdWdiVgB%2bqPXH%2fsv9TWf4XpmqFx4%2fEsgAbLzHYbc%3d";
  const fullImg = "https://content.halocdn.com/media/Default/games/halo-wars-2/heroes/006[1]-5ec9ade07bb14144b919219e5cd1f3c0.jpg"
    return (
      <div>
        <Navbar className="halo-navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">
  <img
        src="https://w.halocdn.com/content/Images/halo-logo-2x.png"
        width="30"
        height="30"
        style={{width: "140px", height: "23.5px"}}
        className="d-inline-block align-top"
        alt="Halo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link className="nav-link" to="/service-record">Service Record</Link>
      <Link className="nav-link" to="/game-history">Game History</Link>
      <Link className="nav-link" to="/leaderboards">Leaderboard</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div className="cover-image">
<img srcSet={smallImg + " 800w, " +
             img + " 1120w, " + fullImg}
     sizes="(max-width: 800px) 800px,
            (max-width: 1120px) 1120px"
     alt="Halo wars cover"/>
</div>
<div className="cover-content hero">
<div  className="reserved"><div className="content"></div></div>
      <h1 className="text--largest">HALO WARS 2</h1>
</div>
</div>
    )
}