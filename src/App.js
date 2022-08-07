import "./App.css";
import React, { useState, useEffect } from "react";
import { GameLengthButtons } from "./Components/GameLengthButtons";
import { InfoWidget } from "./Components/InfoWidget";
import { fetchData } from "./Util/fetchData";
import { TeamScores } from "./Components/TeamScores";
import { Nav } from "./Components/Nav";

function App() {
  const [gameData, setGameData] = useState(null);
  const [gameLength, setGameLength] = useState("value");

  useEffect(() => {
    fetchData().then((data) => setGameData(data));
  }, []);

  return (
    <div>
      <TeamScores gameData={gameData} />
      <Nav />
      <GameLengthButtons
        gameLength={gameLength}
        setGameLength={setGameLength}
      />
      <InfoWidget gameData={gameData} gameLength={gameLength} />
    </div>
  );
}

export default App;
