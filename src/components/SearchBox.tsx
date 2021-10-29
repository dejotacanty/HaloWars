import { useState } from "react";
import { useHistory } from "react-router";

export const SeachBox = () => {
    const history = useHistory()
    const [gamerTagInput, setGamerTagInput] = useState('');
    const updateGamerTag = () => {
          history.push(`/service-record?gamerTag=${gamerTagInput}`)
      }
    return (
        
      <div className="search-form">
      <div className="search-box" style={{marginTop: "7px", borderWidth: 1, borderColor: "black", borderStyle: "solid"}}>
        <div className="input-wrapper">
          <input
            id="query"
            name="query"
            type="search"
            placeholder="Search Gamertag"
            maxLength={100}
            data-autosuggest=""
            data-autosuggest-links=""
            autoComplete="off"
            value={gamerTagInput}
            onChange={(e) => setGamerTagInput(e.target.value)}
            onKeyPress={(event) => {
                if(event.key === 'Enter') {
                    updateGamerTag()
                }
              } }
          />
        </div>
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
      </div>
      </div>
    )
}