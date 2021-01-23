import React from "react";

export default class ColorGrid extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getColorItemList = () => {
    var colorsElems = [];
    this.props.colors.forEach((color) => {
      colorsElems.push(
        <li
          key={color}
          style={{
            background: color,
            display: "inline-block",
            height: "20px",
            width: "20px"
          }}
          onClick={() => this.props.updateColorCB(color)}
        ></li>
      );
    });
    return colorsElems;
  };

  render() {
    return (
      <ul style={{ width: "1280px", lineHeight: "0" }}>
        {this.getColorItemList()}
      </ul>
    );
  }
}
