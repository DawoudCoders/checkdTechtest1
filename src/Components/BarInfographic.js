import React from "react";

export const BarInfographic = ({ title, data, gameLength }) => {
  let total =
    parseInt(data.home[gameLength], 10) + parseInt(data.away[gameLength], 10);

  let homeRatio = (parseInt(data.home[gameLength], 10) / total) * 100;
  let awayRatio = (parseInt(data.away[gameLength], 10) / total) * 100;

  let childBarHome = {
    width: `${100 - homeRatio}%`,
    height: "15px",
    "border-radius": "25px",
    "background-color": "grey",
  };
  let childBarAway = {
    width: `${awayRatio}%`,
    height: "15px",
    "border-radius": "25px",
    "background-color": "green",
  };

  return (
    <div>
      <div className="container">
        <p>{data.home[gameLength]}</p>
        <p>{title}</p>
        <p>{data.away[gameLength]}</p>
      </div>

      <div className="container">
        <div className="parentBarHome">
          <div style={childBarHome}></div>
        </div>

        <div className="parentBarAway">
          <div style={childBarAway}></div>
        </div>
      </div>
    </div>
  );
};
