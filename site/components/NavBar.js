import React from 'react';
import './NavBar.less';

export default class NavBar {
  render() {
    return (
      <div className="NavBar">
        <div className="NavBar-container">
          <div className="NavBar-item">
            <a className="NavBar-link" href="/" target="_self">Úvod</a>
            <a className="NavBar-link" href="https://twitter.com/vmiksu">Twitter</a>
            <a className="NavBar-link" href="https://github.com/tajo/javascript">GitHub</a>
            <a className="NavBar-link" href="/feed.xml">RSS</a>
          </div>
        </div>
      </div>
    );
  }
}
