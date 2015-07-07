import React from 'react';

export default class Counter extends React.Component {

  constructor() {
    super();
    this.state = {counter: 0};
  }

  render() {
    return (
      <div>
        Kliknul jsi {this.state.counter}x. <br/>
        <button onClick={(e) => this.handleClick(e)}>
          Klikni!
        </button>
      </div>
    );
  }

  handleClick(e) {
    this.setState(previousState => {
      return {counter: previousState.counter + 1};
    });
  }

}
