import { PlayerInfo } from "./PlyaerInfo";
import './Leaderboard.css'
import { PlaylistDropdown } from "./sidebar/PlaylistDropdown";
import { seasonMapping, SEASON_15_ID } from "../../data/mappings";
import { useContext, useState } from "react";
import { findPlaylist } from "../../utils/helpers";
import { Playlist } from "../../interfaces/Playlist";
import { GlobalContext } from "../../context/context";
import { Season } from "../../interfaces/Season";

interface SidebarProps {
  onPlaylist: (playlist: Playlist) => void,
  onSeason?: (season: Season) => void
}

export const Sidebar = ({onPlaylist, onSeason}: SidebarProps) => {

  const {gamerTag} = useContext(GlobalContext)
  const [seasonId, setSeasonId] = useState(SEASON_15_ID);

  return (
    <header className="sidebar build-order">
      <nav className="nav" data-dropdown="">
        <a
          data-analytics="{pageName}:ExpandFilterDropdown"
          href="#"
          role="button"
          aria-expanded="false"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          Season 15
        </a>
        <ul>
          <li>
            <a
              data-analytics="{pageName}:FilterDropdown/Option/15"
              href="#"
              className="selected"
            >
              Season 15
            </a>
          </li>
        </ul>
      </nav>
      <PlaylistDropdown playlistIds={seasonMapping[seasonId]} onChange={onPlaylist}/>
      <PlayerInfo gamerTag={gamerTag}/>
    </header>
  );
};
