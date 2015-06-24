import React from 'react';

export default class Html extends React.Component {

  render() {
    const {isProduction, version} = this.props;
    const appSrc = isProduction ? `/build/app.js?v=${version}`
                                : '//localhost:8888/build/app.js';
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Prvni dev-stack</title>
          {isProduction &&
            <link href={`/build/app.css?v=${version}`} rel="stylesheet"/>}
        </head>
        <body>
          <div id="app-root" />
          <script src={appSrc} type="text/javascript"/>
        </body>
      </html>
    );
  }

}

Html.propTypes = {
  isProduction: React.PropTypes.bool.isRequired,
  version: React.PropTypes.string.isRequired
};
