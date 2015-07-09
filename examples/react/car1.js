import React from 'react';

export default class Car1 extends React.Component {

  render() {
    return (
      <div>
        <div><b>Značka:</b> {this.props.car.brand}</div>
        {this.props.car.details &&
          <div>
            <b>Model:</b> {this.props.car.model} <br />
            <b>Rok:</b> {this.props.car.year}
          </div>
        }
      </div>
    );
  }

}