import { useContext, useState } from "react"
import { GlobalContext } from "../../context/context"
import { PLAYLIST_1v1_RANKED, PLAYLIST_2V2_RANKED, PLAYLIST_3v3_RANKED } from "../../data/mappings"
import { usePlayerXp } from "../../hooks/player/usePlayerXp"
import { PieChartData } from "../../interfaces/Chart"
import { findPlaylist, roundMMR } from "../../utils/helpers"
import { HaloPieChart } from "../charts/PieChart"

interface ChartHeightProps {
    chartHeight: number;
}

export const Mmr = ({chartHeight}: ChartHeightProps) => {

    const {gamerTag} = useContext(GlobalContext)

    const [playlistId, setPlaylistId] = useState(PLAYLIST_1v1_RANKED)

    const {playerXp} = usePlayerXp(gamerTag, playlistId)

    const playlist = findPlaylist(playlistId)
    
    if(!playerXp) return (<></>);
    if(playerXp.length === 0) return (<></>);
    const getMMRMessage = () => {
      const ranking = playerXp[0].Result.Mmr.Rating
      if(ranking < 0) {
        return 'Quit the game'
      }
      if(ranking >= 0 && ranking < 1) {
        return 'Bad'
      } 
      if(ranking >= 1 && ranking < 3) {
        return 'Good'
      }
      if(ranking >= 3 && ranking < 6) {
        return 'Amazing'
      }
      if(ranking >= 6) {
        return 'God amongst men'
      }
    }
    const maxMMR = 7.2
    const rankData: PieChartData[] = [
        {
          name: "mmr",
          value: playerXp[0].Result.Mmr.Rating
        },
        {
          name: "full",
          value: playerXp[0].Result.Mmr.Rating > maxMMR ? 0 : maxMMR - playerXp[0].Result.Mmr.Rating
        },
      ]
    

    return (
        <div className="halo-circle stat">
      <div className="chart-title">
          
        <p className="text--large">
        MMR - 
        <select style={{fontSize: "95%", padding: 0, fontFamily: 'wf_heroic-condensed-pro_medium,Calibri'}} onChange={(e) => setPlaylistId(e.target.value)}>
              <option value={PLAYLIST_1v1_RANKED}>{findPlaylist(PLAYLIST_1v1_RANKED)?.View.HW2Playlist.DisplayInfo.View.HW2PlaylistDisplayInfo.Name}</option>
              <option value={PLAYLIST_2V2_RANKED}>{findPlaylist(PLAYLIST_2V2_RANKED)?.View.HW2Playlist.DisplayInfo.View.HW2PlaylistDisplayInfo.Name}</option>
              <option value={PLAYLIST_3v3_RANKED}>{findPlaylist(PLAYLIST_3v3_RANKED)?.View.HW2Playlist.DisplayInfo.View.HW2PlaylistDisplayInfo.Name}</option>
          </select>
        </p>
        </div>
        <div className="csr">
        <div
          className={`circle-chart loaded`}
          data-circle="progress"
          data-value="40"
        ><div className="metrics">
        <div>
          <p className="numeric--medium">
            <span className="value">
              {roundMMR(playerXp[0].Result.Mmr.Rating)}
            </span>
          </p>
          <p className="text--smallest">{getMMRMessage()}</p>
        </div>
      </div>
            <HaloPieChart
            chartSetting="mmr"
            data={rankData}
            label="Rank"
            height={chartHeight}
          />
        </div>
        </div>
        </div>
    )
}