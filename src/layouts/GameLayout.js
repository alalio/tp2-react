import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "player 1",
        gstate : "It's your turn"
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    let won=0;
    for(let i =0;i<3;++i) {
        if ((state.cells[0+3*i]===state.cells[1+3*i]) && (state.cells[0+3*i]===state.cells[2+3*i])
            && (state.cells[0+3*i] !== null))  // verifier tous les ligne
          won=1;
        if ((state.cells[0+i]===state.cells[3+i]) && (state.cells[6+i]===state.cells[3+i])
            && (state.cells[0+i] !== null))  //verifier tous les colonnes
          won=1;
    }
      if ((state.cells[0]===state.cells[4]) && (state.cells[0]===state.cells[8]) && (state.cells[0]!==null))
          won=1;  //verifier la diagonal
      if ((state.cells[2]===state.cells[4]) && (state.cells[2]===state.cells[6]) && (state.cells[2]!==null))
          won=1; //verifier la diagonal
    if(won === 1)
       return {...state, gstate : "lose"};
    else
       return state;
  }
    handleClick(id)
    {
    if(this.state.cells[id] ===null)
    {
        let newcells = [...this.state.cells];
        newcells[id] = this.state.currentPlayer === "player 1" ? 'X' : 'O'; 
        return this.setState({
cells : newcells,
currentPlayer : this.state.currentPlayer === "player 1" ?"player 2" : "player 1"})
}
    }
  render() {
    return (
      <div
        style={gameLayoutStyle}
        
      >
        <GameInfo  gameState={this.state.gstate} currentPlayer={this.state.currentPlayer}/>
        <Board cells={this.state.cells}  onCellClick={(id) => this.handleClick(id)}/>
      </div>
  );
  }
}

export default GameLayout;
