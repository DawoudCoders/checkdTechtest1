import React from "react";
import { Team } from "./Team";

export const TeamScores = ({ gameData }) => {
  const team1Pic =
    "https://cdn.fantasyiteam.com/bethub/teams/150x150/x0vuldayagbmwazqjgbozu0v.png";
  const team2Pic =
    "https://cdn.fantasyiteam.com/bethub/teams/150x150/185xqd7s06sm2t85sxzfkrl.png";

  //this is if shouldn't be needed - I think the useEffect in app needs to be fixed
  if (gameData) {
    return (
      <div>
        <h3>{gameData.teamData.competitionDetails}</h3>
        <Team
          src={team1Pic}
          name={gameData.teamData.teamNames.home}
          position={gameData.teamData.teamScores.home}
        />
        <Team
          src={team2Pic}
          name={gameData.teamData.teamNames.away}
          position={gameData.teamData.teamScores.home}
        />
      </div>
    );
  }
};
