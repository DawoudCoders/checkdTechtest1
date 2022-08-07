import React from "react";
// import styles from "Team.css";

export const Team = ({ src, name, position }) => {
  return (
    <div className="team-container">
      <img src={src} alt={position} width="50" height="50" />
      <p>{name}</p>
      <p>{position}</p>
    </div>
  );
};
