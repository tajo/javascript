import React, {findDOMNode} from 'react';
import './addCar.less';

export default class AddCar extends React.Component {

  render() {
    return (
      <div className="addCar">
        <h3>Nové auto</h3>
        <form onSubmit={(e) => this.handleSubmit(e)} ref="addCar">
          <label htmlFor="brand">Značka:</label>
          <input id="brand" type="text" name="brand" ref="brand" /><br />

          <label htmlFor="model">Model:</label>
          <input id="model" type="text" name="model" ref="model" /><br />

          <label htmlFor="year">Rok:</label>
          <input id="year" type="text" name="year" ref="year" /><br />

          <input type="submit" value="Přidat" />
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.add({
      brand: findDOMNode(this.refs.brand).value,
      model: findDOMNode(this.refs.model).value,
      year: findDOMNode(this.refs.year).value
    });
    findDOMNode(this.refs.addCar).reset();
  }

}

AddCar.propTypes = {
  add: React.PropTypes.func.isRequired
};


