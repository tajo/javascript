import React from 'react';

export default class FormNoJSX extends React.Component {

  render() {
    return (
      React.DOM.form({className: 'nameForm'},
        React.DOM.input({type: 'text', placeholder: 'Jméno'}),
        React.DOM.input({type: 'text', placeholder: 'Příjmení'}),
        React.DOM.input({type: 'submit', value: 'Poslat'})
      )
    );
  }

}