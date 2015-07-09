import React from 'react';
import Car from './car';

export default class Cars1 extends React.Component {

  render() {
    const car1 = {
      id: 1,
      brand: 'Ferrari',
      model: 'FF',
      year: '2014',
      details: true
    };

    const car2 = {
      id: 2,
      brand: 'BMW',
      model: 'M5',
      year: '2013', details: false
    };

    return (
      <div>
        <Car car={car1} remove={this.removeCar} toggle={this.toggleCar} />
        <Car car={car2} remove={this.removeCar} toggle={this.toggleCar} />
      </div>
    );
  }

  removeCar(id) {
    console.log(`remove ${id}`);
  }

  toggleCar(id) {
    console.log(`toggle ${id}`);
  }

}
