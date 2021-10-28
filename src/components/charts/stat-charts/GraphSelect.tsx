import { useState } from "react";
import { entries } from "../../../utils/entries";
import { GraphOptions, GraphType } from "../../../utils/graph_helper";

export const GraphSelect = ({onSelect}: {onSelect: (option: GraphType)=>void}) => {
    const [dropdown, setDropdown] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const gOptions: {key: GraphType, value: string}[] = []
    for(const [key, value] of entries(GraphOptions)) {
        gOptions.push({key, value})
    }
    
    const onSelected = (index: number) => {
      setSelectedIndex(index);
      setDropdown(!dropdown)
      onSelect(gOptions[index].key)
    }
  return (
    <header className="build-order" style={{marginBottom: 10}}>
      <nav data-dropdown="" className="dropdown--chart-type dropdown">
        <a data-analytics="{pageName}:ExpandFilterDropdown/ChartType" href="#" onClick={(e) => {
            setDropdown(!dropdown);
            e.preventDefault();
            e.stopPropagation();
          }}>
          {gOptions[selectedIndex].value}
        </a>
        <ul className={`dropdown-content ${dropdown ? "show" : ""}`}>
          <li>
              {gOptions.map((option, index) => {
                  return (
                      
            <button
            className={`${selectedIndex === index ? 'selected' : ''}`}
            data-analytics="{pageName}:FilterDropdown/"
            type="button"
            onClick={() => onSelected(index)}
          >
            {option.value}
          </button>
                  )
              })}
          </li>
        </ul>
      </nav>
      {/* <nav data-dropdown="" className="dropdown--chart-view">
        <a data-analytics="{pageName}:ExpandFilterDropdown/ChartView" href="#">
          By Player
        </a>
        <ul>
          <li>
            <button
              className="selected"
              data-analytics="{pageName}:FilterDropdown/"
              type="button"
            >
              By Player
            </button>
          </li>
          <li>
            <button data-analytics="{pageName}:FilterDropdown/" type="button">
              {" "}
              By Team
            </button>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};
