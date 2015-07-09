import React from 'react';
import Car from './car';
import AddCar from './addCar';

export default class Cars extends React.Component {

  constructor() {
    super();
    this.state = {cars: [
      {id: 1, brand: 'Ferrari', model: 'FF', year: '2014', details: false},
      {id: 2, brand: 'BMW', model: 'M5', year: '2013', details: true}
    ]};
    this.addCar = this.addCar.bind(this);
    this.removeCar = this.removeCar.bind(this);
    this.toggleCar = this.toggleCar.bind(this);
  }

  render() {
    return (
      <div>
        <AddCar add={this.addCar} />
        <h3>Auta ({this.state.cars.length})</h3>
        {this.state.cars.map(car => {
          return <Car car={car}
                      key={car.id}
                      remove={this.removeCar}
                      toggle={this.toggleCar} />;
        })}
      </div>
    );
  }

  addCar(car) {
    car.id = this.state.cars.length ?
      this.state.cars[this.state.cars.length - 1].id + 1 : 1;

    this.setState({
      cars: this.state.cars.concat([car])
    });
  }

  removeCar(id) {
    this.setState({
      cars: this.state.cars.filter(car => car.id !== id)
    });
  }

  toggleCar(id) {
    this.setState({
      cars: this.state.cars.map(car => {
        if (car.id !== id) {
          return car;
        }
        car.details = !car.details;
        return car;
      })
    });
  }

}
