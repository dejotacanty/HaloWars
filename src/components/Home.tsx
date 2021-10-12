
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { playlists } from "../data/playlists";
import { usePlayerStatSummary } from "../hooks/player/PlayerStatSummary"
import { PieChartData } from "../interfaces/Chart";
import { AllLeaderStats, LeaderStats, RankedModeStatsEntity } from "../interfaces/PlayerStatSummary";
import { entries } from "../utils/entries";
import { HaloBarChart } from "./charts/BarChart";
import { HaloPieChart } from "./charts/PieChart";

const formatLeaderStatData = (stat: AllLeaderStats) => {
    let leaderStatsTmp: PieChartData[] = [];
    for (const [key, value] of entries(stat as LeaderStats)) {
        leaderStatsTmp.push({name: key, value: value.TotalMatchesStarted})
    }
    leaderStatsTmp.sort((a, b) => a.value > b.value ? -1 : 1)
    return leaderStatsTmp;
}

export const Home = () => {
    const {playerStatSummary} = usePlayerStatSummary('warnster');

    const [selectedPlaylistId, setSelectedPlaylistId] = useState<string>('all_ranked')
    const [leaderStats, setLeaderStats] = useState<PieChartData[]>([]);

    useEffect(() => {
        if(!playerStatSummary) return;
        if(selectedPlaylistId === 'all_ranked') {
            const rankedModeStats = playerStatSummary.MatchmakingSummary.RankedModeStats as RankedModeStatsEntity[];
            setLeaderStats(formatLeaderStatData(rankedModeStats[0].LeaderStats))
        } else {
            const selected = playerStatSummary.MatchmakingSummary.RankedPlaylistStats?.find((playlistStat) => playlistStat.PlaylistId === selectedPlaylistId)
            if(selected) {
                setLeaderStats(formatLeaderStatData(selected.LeaderStats))
            }
        }
    }, [selectedPlaylistId, playerStatSummary])

    if(!playerStatSummary) return <></>;

    const rankedModeStats = playerStatSummary.MatchmakingSummary.RankedModeStats as RankedModeStatsEntity[];
    

    const selectOptions = [{
        name: 'All Ranked', value:'all_ranked',
    }]

    if(playerStatSummary.MatchmakingSummary.RankedPlaylistStats) {
        playerStatSummary.MatchmakingSummary.RankedPlaylistStats.forEach((stat) => {
            const playlist = playlists.find((playlist) => {
                return playlist.View.Identity === stat.PlaylistId.replaceAll('-', '')
            })
            selectOptions.push({name: playlist?.View.HW2Playlist.DisplayInfo.View.HW2PlaylistDisplayInfo.WebDisplayName as string, value: stat.PlaylistId})
        })
    }

    return (
        <div>
            <Form.Control
            as="select"
            onChange={(e) => setSelectedPlaylistId(e.target.value)}>
                {selectOptions.map((option) => {
                    return <option value={option.value}>{option.name}</option>
                })}
            </Form.Control>
        <div style={{width: "100%", height: 400}}>
            <HaloBarChart data={leaderStats}></HaloBarChart>
        </div>
        <div style={{width: "100%", height: 400}}>
            <HaloPieChart data={leaderStats} label="balh"></HaloPieChart>
        </div>
        
        </div> 
    )

} 