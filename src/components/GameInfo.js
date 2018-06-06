import React from "react";

// FIXME: change message and color based on `gameState`'s value
const GameInfo = ({ gameState = "It's your turn", currentPlayer = "unkown" }) => (

        <h3>{gameState} {currentPlayer}</h3>
);

export default GameInfo;
