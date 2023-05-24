import React, { useState } from "react";
import "./styles.css";
// import "../resources"

const App = () => {
  return (
    <div className="App">
      <div className="Board">
        <div className="Damage-zone">Damage</div>
        <div className="Deck-zone">Deck</div>
        <div className="Field-zone">Field</div>
        <div className="Backups-zone">Backups</div>
        <div className="Break-zone">Break</div>
      </div>
      <div className="Hand">
        <div className="Card-item"></div>
      </div>
    </div>
  );
};
export default App;
