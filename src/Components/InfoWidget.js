import React from "react";
import { BarInfographic } from "./BarInfographic";

export const InfoWidget = ({ gameData, gameLength }) => {
  //will do all the data sorting to then pass to the BarInfographic

  //this is if shouldn't be needed - I think the useEffect in app needs to be fixed
  if (gameData) {
    let possession = {
      home: gameData.stats.homeStats.possessionPercentage,
      away: gameData.stats.awayStats.possessionPercentage,
    };
    let shots = {
      home: gameData.stats.homeStats.totalScoringAtt,
      away: gameData.stats.awayStats.totalScoringAtt,
    };
    let shotsOnTarget = {
      home: gameData.stats.homeStats.ontargetScoringAtt,
      away: gameData.stats.awayStats.ontargetScoringAtt,
    };
    let corners = {
      home: gameData.stats.homeStats.wonCorners,
      away: gameData.stats.awayStats.wonCorners,
    };

    return (
      <div>
        <BarInfographic
          gameLength={gameLength}
          title={"Possession"}
          data={possession}
        />
        <BarInfographic gameLength={gameLength} title={"Shots"} data={shots} />
        <BarInfographic
          gameLength={gameLength}
          title={"Shots On Target"}
          data={shotsOnTarget}
        />
        <BarInfographic
          gameLength={gameLength}
          title={"Corners"}
          data={corners}
        />
      </div>
    );
  }
};
