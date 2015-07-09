import React from 'react';
import AddCar from './addCar';

export default class Cars3 extends React.Component {

  render() {
    return (
      <div>
        <AddCar add={this.addCar} />
      </div>
    );
  }

  addCar(car) {
    console.log(`add ${car}`);
  }

}
