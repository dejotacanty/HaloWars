import { useState } from "react";
import {
  team1Colour,
  team1Image,
  team2Colour,
  team2Image,
} from "../../utils/helpers";

export const TeamHeader = ({
  teamId,
  isCheck,
  onSelect,
}: {
  teamId: number;
  isCheck?: boolean;
  onSelect?: (selected: boolean) => void;
}) => {
    
    const [isChecked, setIsChecked] = useState<boolean>(true)
  const colour = teamId === 1 ? team1Colour : team2Colour;
  const imgUrl = teamId === 1 ? team1Image : team2Image;
  const name = "Team " + teamId;

  return (
    <>
      <th className="color dock" style={{ color: colour }}></th>
      {isCheck && (
        <th className="col--checkbox">
          <input onChange={() => {
              setIsChecked(!isChecked)
              if(onSelect) {
                  onSelect(!isChecked)
              }
              }} type="checkbox" checked={isChecked} data-team-id={teamId} />
        </th>
      )}
      <th className="id--image">
        <div className="persona-image">
          <span>
            <img src={imgUrl} alt={name} />
          </span>
        </div>
      </th>
      <th className="id--text">
        <span className="text--medium">{name}</span>
      </th>
    </>
  );
};
