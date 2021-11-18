import { useState } from "react";
import { leaderData } from "../../data/leaders";
import { teamPlayerColourMaps } from "../../utils/helpers";
import { PlayerIndex } from "../BuildOrder";

interface HaloButtonProps {
  players: PlayerIndex[];
  onSelected: (playerIndex: number) => void
}

export const HaloButton = ({ players, onSelected }: HaloButtonProps) => {
  const [dropdown, setDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedPlayer = players[selectedIndex];
  const selectedLeader = leaderData[selectedPlayer.LeaderId];

  const onPlayerSelected = (index: number, playerIndex: number) => {
    setSelectedIndex(index);
    setDropdown(!dropdown)
    onSelected(playerIndex);
  }

  return (
    <span className="build-order">
      <nav className="dropdown" data-dropdown="" data-team="1" data-index="0">
        <a
          href="#"
          onClick={(e) => {
            setDropdown(!dropdown);
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div
            className="avatar avatar--hw2-leader color"
            style={{ color: teamPlayerColourMaps[selectedPlayer.TeamId][selectedPlayer.TeamPlayerIndex] }}
          >
            <span>
              <img
                src={selectedLeader.Image.View.Media.MediaHeadUrl}
                alt={selectedLeader.DisplayInfo.View.HW2LeaderDisplayInfo?.Name}
              />
            </span>
          </div>
          {selectedPlayer.HumanPlayerId?.Gamertag}
        </a>
        <ul className={`dropdown-content ${dropdown ? "show" : ""}`}>
          {players.map((player, index) => {
              const playerLeader = leaderData[player.LeaderId]
            return (
              <li>
                <button
                  className={`${index === selectedIndex ? 'selected' : ''}`}
                  data-analytics="{pageName}:FilterDropdown/"
                  type="button"
                  onClick={() => onPlayerSelected(index, player.playerIndex)}
                >
                  <div
                    className="avatar avatar--hw2-leader color"
                    style={{ color: teamPlayerColourMaps[player.TeamId][player.TeamPlayerIndex] }}
                  >
                    <span>
                      <img
                        src={playerLeader.Image.View.Media.MediaHeadUrl}
                        alt={playerLeader.DisplayInfo.View.HW2LeaderDisplayInfo?.Name}
                      />
                    </span>
                  </div>
                  {player.HumanPlayerId?.Gamertag}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </span>
  );
};
