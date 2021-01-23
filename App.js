import React from "react";
import "./styles.css";
import ColorGrid from "./ColorGrid";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.generateColors();
  }

  random_rgb = () => {
    let range = 255;
    return (
      "rgb(" +
      Math.round(Math.random() * range) +
      "," +
      Math.round(Math.random() * range) +
      "," +
      Math.round(Math.random() * range) +
      ")"
    );
  };

  generateColors = () => {
    let colors = [];
    let rgbCode = "";
    for (let i = 0; i < 32768; i++) {
      rgbCode = this.random_rgb();
      if (!colors.includes(rgbCode)) {
        colors.push(rgbCode);
      } else {
        colors.length < 32768 && i--;
      }
    }
    this.setState({ colors: colors });
  };

  render() {
    return (
      <div className="App">
        <h1>Color Grid</h1>
        <h2 style={{ color: this.state.selectedColor || "#000" }}>
          Select color below to apply on this text.
        </h2>
        <code>
          {this.state.selectedColor && "Color Code " + this.state.selectedColor}
        </code>
        {!this.state.colors && <div className="loader"></div>}
        {this.state.colors && (
          <ColorGrid
            colors={this.state.colors}
            updateColorCB={(color) => this.setState({ selectedColor: color })}
          />
        )}
      </div>
    );
  }
}
