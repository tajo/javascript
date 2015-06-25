import React from 'react';
import './main.less';
import imgHello from './hello.gif';
import imgIcon from './icon.png';

export default class Main extends React.Component {

  render() {
    return (
      <div className="hello">
        Hello world!
        <img src={imgHello} width="300px"/>
        <img src={imgIcon} />
      </div>
    );
  }
}

