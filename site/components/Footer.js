import React from 'react';
import './Footer.less';

export default class Footer {
  render() {
    return (
      <footer className="Footer">
        Diskutujte prostřednictvím <a href="https://github.com/tajo/javascript/issues">issues</a>.<br />
        Vylepšete článek <a href="https://github.com/tajo/javascript/pulls">pull requestem</a>.<br />
        Sledujte na <a href="https://twitter.com/vmiksu">twitteru</a>.<br />
        <b>Sdílejte!</b>
      </footer>
    );
  }
}
