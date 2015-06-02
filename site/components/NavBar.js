import React from 'react';
import './NavBar.less';

export default class NavBar {
  render() {
    return (
      <div className="NavBar">
        <div className="NavBar-container">
          <div className="NavBar-logo">
            <a href="./" target="_self" className="NavBar-logoTitle">React <i>DnD</i></a>
            <p className="NavBar-logoDescription">Drag and Drop for React</p>
          </div>

          <div className="NavBar-item">
            <a className="NavBar-link" href="#" target="_self">Docs</a>
            <a className="NavBar-link" href="#" target="_self">Examples</a>
            <a className="NavBar-link" href="#">GitHub</a>
          </div>
        </div>
      </div>
    );
  }
}
