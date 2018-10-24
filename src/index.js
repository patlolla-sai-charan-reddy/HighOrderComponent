import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const Apple = Component => {
  return class extends React.Component {
    state = { x: 0, y: 0 };
    handleMouseEvent = event => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    };
  textData(e) {
    console.log("eee", e)
  }
    render() {
      return (
        <div onMouseMove={this.handleMouseEvent}>
          <Component ref={this.textData} {...this.props} mouse={this.state} />
        </div>
      );
    }
  };
};

class Apples extends React.Component {
  render() {
    const { x, y } = this.props.mouse;
    return (
      <div>
        <p>
          {x} {y}
        </p>
      </div>
    );
  }
}

//https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce

const AppWithMouse = Apple(Apples);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithMouse />, rootElement);
