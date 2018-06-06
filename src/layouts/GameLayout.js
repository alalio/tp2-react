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
let num=0;
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
        if ((state.cells[0+i]===state.cells[1+i]) && (state.cells[0+i]===state.cells[2+i])
            && (state.cells[0+i] !== null))  // verifier tous les ligne
          won=1;
        if ((state.cells[0+i]===state.cells[4+i]) && (state.cells[0+i]===state.cells[8+i])
            && (state.cells[0+i] !== null))  //verifier tous les colonnes
          won=1;
    }
      if ((state.cells[0]===state.cells[4]) && (state.cells[0]===state.cells[8]) && (state.cells[0]!==null))
          won=1;  //verifier la diagonal
      if ((state.cells[2]===state.cells[4]) && (state.cells[2]===state.cells[6]) && (state.cells[2]!==null))
          won=1; //verifier la diagonal


    if((props.cells !== state.cells) && (won === 1))
      this.setState({gstate :"won"});  //changer le message affiché
    return state;
  }
    handleClick()
    {
        num=1-num;
        return this.setState({ currentPlayer: (num === 1) ?"player 2" : "player 1" })
    }
  render() {
    return (
      <div
        style={gameLayoutStyle}
        onClick={()  => this.handleClick()}
      >
        <GameInfo  gameState={this.state.gstate} currentPlayer={this.state.currentPlayer}/>
        <Board cells={this.state.cells}/>
      </div>
  );
  }
}

export default GameLayout;
