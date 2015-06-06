import React from 'react';
import './Footer.less';
import Links from './Links';

export default class Footer {
  render() {

    return (
      <footer>
        <Links page={this.props.page} />
        <div className="Footer">
          Diskutujte prostřednictvím <a href="https://github.com/tajo/javascript/issues">issues</a>.<br />
          Vylepšete článek <a href="https://github.com/tajo/javascript/pulls">pull requestem</a>.<br />
          Sledujte na <a href="https://twitter.com/vmiksu">twitteru</a>.<br />
          <b>Sdílejte!</b>
        </div>
      </footer>
    );
  }
}
