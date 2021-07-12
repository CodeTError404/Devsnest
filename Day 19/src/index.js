import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </span>
      <span>{count}</span>
      <span>
        <button onClick={() => setCount(count - 1)}>-</button>
      </span>
    </div>
  );
};

class App extends Component {
  state = {
    counters: []
  };

  addCounter = () => {
    this.setState(prevState => ({
      counters: [...prevState.counters, <Counter />]
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>  Add counters and start performing increment and decrement.</h1>
        <button onClick={this.addCounter}>Add Counter</button>
        {this.state.counters}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
