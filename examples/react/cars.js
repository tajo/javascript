import React from 'react';
import Car from './car';
import AddCar from './addCar';

export default class Cars extends React.Component {

  constructor() {
    super();
    this.state = {cars: [
      {id: 1, brand: 'Ferrari', model: 'FF', year: '2014'},
      {id: 2, brand: 'BMW', model: 'M5', year: '2013'}
    ]};
    this.addCar = this.addCar.bind(this);
  }

  render() {
    return (
      <div className="cars">
        <AddCar addCallback={this.addCar.bind(this)} />
        <h3>Cars</h3>
        {this.state.cars.map(car => <Car car={car} key={car.id} />)}
      </div>
    );
  }

  addCar(car) {
    car.id = this.state.cars[this.state.cars.length - 1].id + 1;
    this.setState({
      cars: this.state.cars.concat([car])
    });
  }

}
