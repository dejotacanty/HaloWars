export const PlayerInfo = ({gamerTag}: {gamerTag: string}) => {
    return (
        
      <div style={{display: 'none'}} className="player-info">
      <div className="stat">
        <p className="text--smallest">{gamerTag}'s Current CSR</p>
        <div className="csr">
          <img src="https://content.halocdn.com/media/Default/games/halo-wars-2/csr/csr_top_array00-783f32318c8c49eda0365c5daa50f5b6-a473b61a79ce429d92094f361ec3d357.png" />
          <div className="rank-info">
            <div>Onyx</div>
            <div>CSR: 1538</div>
          </div>
        </div>
      </div>
    </div>
    )
}