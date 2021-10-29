import { useEffect, useState } from "react";
import { playlists } from "../../../data/playlists";
import { Playlist } from "../../../interfaces/Playlist";
import { findPlaylist } from "../../../utils/helpers";

export const PlaylistDropdown = ({playlistIds, onChange}: {playlistIds: string[], onChange: (playlist: Playlist) => void}) => {
  const [selected, setSelected] = useState(playlistIds[0])
  const [dropdown, setDropdown] = useState(false);
  const selectedPlaylist = findPlaylist(selected);

  useEffect(() => {
    const p = findPlaylist(selected) as Playlist
    onChange(p)
  },[selected])
  return (
        
      <nav className="nav dropdown" data-dropdown="">
      <a
        data-analytics="{pageName}:ExpandFilterDropdown"
        href="#"
        role="button"
        aria-expanded="false"
        onClick={(e) => {
          setDropdown(!dropdown);
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {selectedPlaylist && selectedPlaylist.View.HW2Playlist.DisplayInfo.View.HW2PlaylistDisplayInfo.Name}
      </a>
      <ul className={`dropdown-content ${dropdown ? "show" : ""}`}>
        {playlistIds.map((playlistId) => {
          const playlist = findPlaylist(playlistId);
          if(!playlist) return;
          return (
            <li>
              <a
                href="#"
                onClick={(e) => {
                  setDropdown(!dropdown);
                  e.preventDefault();
                  e.stopPropagation();
                  setSelected(playlistId)
                }}
                className={`${selected === playlistId ? 'selected' : ''}`}
              >
                {playlist.View.HW2Playlist.DisplayInfo.View.HW2PlaylistDisplayInfo.Name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
    )
}