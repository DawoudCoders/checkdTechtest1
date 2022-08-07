import React from "react";

export const GameLengthButtons = ({ gameLength, setGameLength }) => {
  const changeGameLength = (e) => {
    if (gameLength === e.target.value) return;
    setGameLength(e.target.value);
  };

  return (
    <div className="button-container">
      <button type="button" onClick={changeGameLength} value={"value"}>
        Full Match
      </button>
      <button type="button" onClick={changeGameLength} value={"fh"}>
        1st Half
      </button>
      <button type="button" onClick={changeGameLength} value={"sh"}>
        2nd Half
      </button>
    </div>
  );
};
