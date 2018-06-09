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
          ismouseover :false,
        };
    }
    getvalue()
    {
      return this.state.key;
    }
    MouseOut()
    {
        this.setState({ ismouseover : false});

    }
    MouseOver()
    {
        this.setState({ ismouseover : true});

    }
    render() {
        return (
            <div
                style={this.state.ismouseover ? cellStylee : cellStyle}
              onMouseOut={() => this.MouseOut()}
              onMouseOver={() => this.MouseOver()}
              onClick={() => this.props.onclick()} >
                {this.props.value}
            </div>
        );
    }
}

export default Cell;
