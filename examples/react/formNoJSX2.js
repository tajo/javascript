import React from 'react';

export default class FormNoJSX2 extends React.Component {

  render() {

    const {form, input} = React.DOM;

    return (
      form({className: 'nameForm'},
        input({type: 'text', placeholder: 'Jméno'}),
        input({type: 'text', placeholder: 'Příjmení'}),
        input({type: 'submit', value: 'Poslat'})
      )
    );
  }

}