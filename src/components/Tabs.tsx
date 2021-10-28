import { ReactElement, useState } from "react";

export const Tabs = ({tabs, tabData}: {tabs: string[], tabData: JSX.Element[]}) => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <div  className="tab-control">
    <nav className="tab-control--navigation">
      <ul>
        {tabs.map((title, index) => {
           return (<li className={`${tabIndex === index ? 'current' : ''}`}>
            <button type="button" onClick={() => setTabIndex(index)}>
              {title}
            </button>
          </li>);
        })}
      </ul>
    </nav>
        {tabData[tabIndex]}
    </div>
  );
};
