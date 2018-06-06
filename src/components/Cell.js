import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};
const cellStylee = {
    display: "block",
    backgroundColor: "blue",
    width: "200px",
    height: "200px",
    border: "1px solid #333",
    outline: "none",
    textAlign: "center",
    lineHeight: "200px",
    cursor: "pointer"
};
//const Cell = () => <div style={this.onMouseOver ? cellStylee : cellStyle}>?</div>;

//const Cell = () => <div style={cellStylee}>?</div>;
let num=0;
class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
          value :cellStyle,
            key : null
        };
    }
    getvalue()
    {
      return this.state.key;
    }
    MouseOut()
    {
        this.setState({value :cellStyle})

    }
    MouseOver()
    {
        this.setState({value :cellStylee})

    }
    handleClick()
    {
      if(this.state.key === null) {
          if (num === 0)
              this.setState({key: 'X'})
          else
              this.setState({key: 'O'})
      }
       num=1-num;
    }
    render() {
        return (
            <div
                style={this.state.value}
              onMouseOut={() => this.MouseOut()}
              onMouseOver={() => this.MouseOver()}
              onClick={() => this.handleClick()} >
                {this.state.key}
            </div>
        );
    }
}

export default Cell;
