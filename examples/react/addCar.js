import React, {findDOMNode} from 'react';
import './addCar.less';

export default class AddCar extends React.Component {

  render() {
    return (
      <div className="addCar">
        <h3>New car</h3>
        <form onSubmit={(e) => this.handleSubmit(e)} ref="addCar">
          <label htmlFor="brand">Brand:</label>
          <input id="brand" type="text" name="brand" ref="brand" /><br />

          <label htmlFor="model">Model:</label>
          <input id="model" type="text" name="model" ref="model" /><br />

          <label htmlFor="year">Year:</label>
          <input id="year" type="text" name="year" ref="year" /><br />

          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCallback({
      brand: findDOMNode(this.refs.brand).value,
      model: findDOMNode(this.refs.model).value,
      year: findDOMNode(this.refs.year).value
    });
    findDOMNode(this.refs.addCar).reset();
  }

}
