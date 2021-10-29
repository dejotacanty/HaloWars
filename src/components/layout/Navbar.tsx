import "./Navbar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import {
  GAME_FULL_IMG,
  GAME_IMG,
  GAME_SML_IMG,
  MAIN_FULL_IMG,
  MAIN_IMG,
  MAIN_SML_IMG,
} from "../../data/images";
import { GlobalContext } from "../../context/context";

export const NavBar = () => {
  const location = useLocation();
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  function myFunction() {
    const el = document.getElementById("myDropdown");
    if (el) {
      el.classList.toggle("show");
    }
  }

  useEffect(() => {
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
      //@ts-ignore
      if (event && event.target && !event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  }, []);

  const dropdownList: { [key: string]: string } = {
    "/service-record": "Service Record",
    "/": "Service Record",
    "/game-history": "Game History",
    "/leaderboards": "Leaderboards",
    "/game": "Game History",
  };

  const getCoverImage = () => {
    let image = "";

    switch (location.pathname) {
      case "/service-record":
        image =
          MAIN_SML_IMG + " 800w, " + MAIN_IMG + " 1120w, " + MAIN_FULL_IMG;
        break;
      case "/game-history":
        image =
          GAME_SML_IMG + " 800w, " + GAME_IMG + " 1120w, " + GAME_FULL_IMG;
        break;
      case "/game":
        image =
          GAME_SML_IMG + " 800w, " + GAME_IMG + " 1120w, " + GAME_FULL_IMG;
        break;
      default:
        image =
          MAIN_SML_IMG + " 800w, " + MAIN_IMG + " 1120w, " + MAIN_FULL_IMG;
    }

    return image;
  };

  const searchInputRef = useRef<HTMLInputElement>(null);
  const {gamerTag, setGamerTag} = useContext(GlobalContext);

  const updateGamerTag = () => {
    if(searchInputRef.current) {
      setGamerTag(searchInputRef.current.value)
    }
  }

  return (
    <div>
      <header id="site-header" className="dark">
        <div className="header-position">
          <div className="header-contain">
            <div className="header-wrapper">
              <a
                className="header--item site-brand"
                href="https://www.halowaypoint.com/en-gb"
                title="Home"
                data-analytics="Site:Header/WaypointHomeLink"
              >
                <img
                  src="//w.halocdn.com/content/Images/halo-logo-2x.png"
                  alt="Halo"
                />
              </a>
              <div className="search-form">
              <div className="search-box" style={{marginTop: "7px"}}>
                <div className="input-wrapper">
                  <input
                    id="query"
                    name="query"
                    type="search"
                    placeholder="Search Site or Gamertag"
                    maxLength={100}
                    data-autosuggest=""
                    data-autosuggest-links=""
                    autoComplete="off"
                    onKeyPress={(event) => {
                      if(event.key === 'Enter') {
                        updateGamerTag()
                      }
                    } }
                    ref={searchInputRef}
                  />
                </div>
                {/* <Link to={`/service-record?gamerTag=${searchInputRef.current?.value}`}> */}
                <button
                  type="submit"
                  value="Search"
                  data-analytics="Site:Header/Search"
                  aria-label="Search"
                  onClick={updateGamerTag}
                >
                <span>Search</span>
                <span className="icon icon--search"></span>
              </button>
              {/* </Link> */}
              </div>
            </div>
          </div>
          </div>
        </div>
      </header>
      <div
        className="hero--short dark hero has-media  has-filters has-nav"
        data-cms-id="334558"
        id="334558"
      >
        <div className="media-wrapper media--short">
          <div className="media-aspect">
            <div className="media-offset media-image">
              <img
                srcSet={getCoverImage()}
                sizes="(max-width: 800px) 800px,
            (max-width: 1120px) 1120px"
                alt="Halo wars cover"
              />
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
              <h1 className="text--largest">Halo Wars 2 | {gamerTag}</h1>
              {gamerTag && (
                
              <div className="customdrop">
                <div className="dropdown">
                  <button onClick={myFunction} className="dropbtn">
                    {dropdownList[location.pathname] ? dropdownList[location.pathname] : dropdownList['/']}
                  </button>
                  <div id="myDropdown" className="dropdown-content">
                    {Object.keys(dropdownList).map((key) => {
                      if (key === "/" || key === "/game") return;
                      return (
                        <Link
                          className={`drop-link ${
                            location.pathname === key ? " selected" : ""
                          }`}
                          to={key}
                        >
                          {dropdownList[key]}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
