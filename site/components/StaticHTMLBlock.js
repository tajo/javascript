import React from 'react';
import CodeBlock from './CodeBlock';
var Counter = require('../../examples/react-uvod/counter');

export default class StaticHTMLBlock {
  static propTypes = {
    html: React.PropTypes.string.isRequired
  };

  render() {

    // Here goes a really hack-ish way to convert
    // areas separated by Markdown <hr>s into code tabs.

    if (!this.props.html) {
      return null;
    }

    const blocks = this.props.html.split('$$$');
    const elements = [];

    let es5Content = null;
    let es6Content = null;

    for (let i = 0; i < blocks.length; i++) {
      const content = blocks[i];

      switch (i % 2) {
      case 0:
        elements.push(
          <div key={i}
               style={{ width: '100%' }}
               dangerouslySetInnerHTML={{__html: content}} />
        );
        break;
      case 1:
        //elements.push(React.createElement(require('../../examples/' + content)));
        elements.push(
          <div className="codeBlock" style={{borderLeft: 'solid 5px rgba(44, 83, 158, 0.9)'}}>
            {React.createElement(
              require('../../examples/react/' + content + '.js'),
              {key: content}
            )}
            <div style={{fontSize: '0.8em', float: 'right'}}>
              <a href={'https://github.com/tajo/javascript/tree/master/examples/react/' + content + '.js'}>
                zdrojový kód
              </a>
            </div>
          </div>
        );
        break;
      }
    }
    //elements.push(React.createElement(require('../../examples/react-uvod/counter')));
    return (
      <div style={{ width: '100%' }}>
        {elements}
      </div>
    );
  }
}