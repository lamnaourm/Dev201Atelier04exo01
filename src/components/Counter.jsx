import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      Inc: 1,
      De: 1,
    };

    this.incrementer = this.incrementer.bind(this);
    this.decrementer = this.decrementer.bind(this);
  }

  incrementer() {
    this.setState({ counter: this.state.counter + this.state.Inc });
  }
  decrementer() {
    this.setState({ counter: this.state.counter - this.state.De });
  }
  init = () => {
    this.setState({ counter: 0, Inc: 1, De: 1 });
  };
  render() {
    return (
      <div className="counter">
        <h1 className={this.state.counter >= 0 ? "green" : "red"}>
          {this.state.counter}
        </h1>

        <div className="bouttons">
          <button onClick={this.incrementer}>Incrementer</button>
          <button onClick={this.decrementer}>Decrementer</button>
          <button onClick={this.init}>Initialiser</button>
        </div>

        <div className="pas">
          <h2>Pas d'incrementation {this.state.Inc}</h2>
          <button className="green" onClick={() => this.setState({ Inc: 1 })}>+1</button>
          <button className="green" onClick={() => this.setState({ Inc: 2 })}>+2</button>
          <button className="green" onClick={() => this.setState({ Inc: 3 })}>+3</button>
          <button className="green" onClick={() => this.setState({ Inc: 4 })}>+4</button>
        </div>

        <div className="pas">
          <h2>Pas de decrementation {this.state.De}</h2>
          <button className="red" onClick={() => this.setState({ De: 1 })}>-1</button>
          <button className="red" onClick={() => this.setState({ De: 2 })}>-2</button>
          <button className="red" onClick={() => this.setState({ De: 3 })}>-3</button>
          <button className="red" onClick={() => this.setState({ De: 4 })}>-4</button>
        </div>
      </div>
    );
  }
}
