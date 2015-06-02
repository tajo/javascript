import React from 'react';
import PageBody from '../components/PageBody';
import StaticHTMLBlock from '../components/StaticHTMLBlock';
import IndexHTML from '../../content/index.md';

export default class HomePage {
  render() {
    return (
      <div>
        <div className="masterHead">
          <p><b>O moderních webových aplikacích</b></p>
          <p className="cover">#javascript #react #flux #immutable #nodejs #webpack</p>
          <div className="circle-bg"></div>
          <div className="circle-bg2">DžejEs</div>
        </div>
        <PageBody>
          <StaticHTMLBlock html={IndexHTML} />
        </PageBody>
      </div>
    );
  }
}