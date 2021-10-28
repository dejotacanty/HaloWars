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
          {selectedPlayer.HumanPlayerId.Gamertag}
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
                  {player.HumanPlayerId.Gamertag}
                </button>
              </li>
            );
          })}
          {/* <li data-value="1">
            <button
              className="selected"
              data-analytics="{pageName}:FilterDropdown/"
              type="button"
              onClick={() => setDropdown(!dropdown)}
            >
              <div
                className="avatar avatar--hw2-leader color"
                style={{ color: "#98252A" }}
              >
                <span>
                  <img
                    src="https://image.halocdn.com/?path=https:%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-wars-2%2fleaders%2fleader-image-pavium-94fe439dc91844f3b9c6a58f0b56042d.png&amp;leftCrop=342&amp;rightCrop=515&amp;bottomCrop=1145&amp;topCrop=180&amp;width=120&amp;height=120&amp;hash=v0MRLzpj5JOB5wqEVoIKmCG5ZfevAxx37NlKCckOJ9k%3d"
                    alt="Pavium"
                  />
                </span>
              </div>
              xandy92
            </button>
          </li>
          <li data-value="2">
            <button data-analytics="{pageName}:FilterDropdown/" type="button">
              <div
                className="avatar avatar--hw2-leader color"
                style={{ color: "#E4CB56" }}
              >
                <span>
                  <img
                    src="https://image.halocdn.com/?path=https:%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-wars-2%2fleaders%2fyapyap-f986fa8a011a4eb494ba030a9cbbd215.png&amp;leftCrop=342&amp;rightCrop=515&amp;bottomCrop=1145&amp;topCrop=180&amp;width=120&amp;height=120&amp;hash=iW5YPGzrCQBTgvsDbhe3pmKD3x5wE%2feDR3mUwoXyFQY%3d"
                    alt="Yapyap THE DESTROYER"
                  />
                </span>
              </div>
              EdGreenall
            </button>
          </li>
          <li data-value="3">
            <button data-analytics="{pageName}:FilterDropdown/" type="button">
              <div
                className="avatar avatar--hw2-leader color"
                style={{ color: "#C36533" }}
              >
                <span>
                  <img
                    src="https://image.halocdn.com/?path=https:%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-wars-2%2fleaders%2fcolony-cutout-3-5414bcf8c05b4c2e86e046b95c9e8734.png&amp;leftCrop=342&amp;rightCrop=515&amp;bottomCrop=1145&amp;topCrop=180&amp;width=120&amp;height=120&amp;hash=NXNP5GhGWHfUYtg3lJnEtQWDoLdf4S0t%2fiaF%2bBOqy0M%3d"
                    alt="Colony"
                  />
                </span>
              </div>
              BtC Hosticide
            </button>
          </li> */}
        </ul>
      </nav>
    </span>
  );
};
