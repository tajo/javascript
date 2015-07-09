import React from 'react';

export default class Car extends React.Component {

  constructor() {
    super();
    this.state = {details: false};
  }

  render() {
    const styles = {
      border: '2px solid #CCC',
      padding: 10,
      margin: '10px 10px 10px 0px',
      backgroundColor: '#FFF',
      float: 'left'
    };

    return (
      <div style={styles}>
        <b>Brand:</b> {this.props.car.brand}
        {this.state.details &&
          <div>
            <b>Model:</b> {this.props.car.model} <br />
            <b>Year:</b> {this.props.car.year} <br />
          </div>
        }

        <button onClick={() => this.toggle()} style={{display: 'block'}}>
          {this.state.details ? 'Less' : 'More'}
        </button>
      </div>
    );
  }

  toggle() {
    this.setState({details: !this.state.details});
  }

}
