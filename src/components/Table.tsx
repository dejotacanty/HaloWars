import { Table } from "react-bootstrap"
import { ResultsEntity } from "../interfaces/LeaderboardResponse"


export const HaloTable = ({data}: {data: ResultsEntity[]}) => {
    console.log({data})
    return (
        <Table responsive>
  <thead>
    <tr>
        <th key={"rank"}>Rank</th>
        <th key={"gamertag"}>Gamertag</th>
        <th key={"score"}>CSR</th>
    </tr>
  </thead>
  <tbody>
      {data.map((result) => {
          return (
              <tr>
                  <td>{result.Rank}</td>
                  <td>{result?.Player.Gamertag}</td>
                  <td>{result.Score.Csr}</td>
              </tr>
          )
      })}
  </tbody>
</Table>
    )
}