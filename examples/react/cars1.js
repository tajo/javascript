import React from 'react';
import Car from './car1';

export default class Cars1 extends React.Component {

  render() {
    const car = {
      id: 1,
      brand: 'Ferrari',
      model: 'FF',
      year: '2014',
      details: true
    };

    return (
      <div>
        <Car car={car} />
      </div>
    );
  }

}
