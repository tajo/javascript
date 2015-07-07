import './base.less';
import Constants, { Articles, Pages } from './Constants';
import HomePage from './pages/HomePage';
import Article from './pages/ArticlePage';
import React, { Component } from 'react';

const favicon = require('./favicon.png');

const ArticleMap = {
  BABEL: require('../content/Babel/index.md'),
  NASTROJE: require('../content/Nastroje/index.md'),
  STACK: require('../content/Stack/index.md'),
  REACT_UVOD: require('../content/React-uvod/index.md')
};

export default class IndexPage extends Component {
  static getDoctype() {
    return '<!doctype html>';
  }

  static renderToString(props) {
    return IndexPage.getDoctype() +
           React.renderToString(<IndexPage {...props} />);
  }

  constructor(props) {
    super(props);
    this.state = {
      renderPage: !this.props.devMode
    };
  }

  render() {
    // Dump out our current props to a global object via a script tag so
    // when initialising the browser environment we can bootstrap from the
    // same props as what each page was rendered with.
    const browserInitScriptObj = {
      __html: 'window.INITIAL_PROPS = ' + JSON.stringify(this.props) + ';\n'
    };

    const googleAnalytics = {
      __html: `
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-63660429-1', 'auto');
          ga('send', 'pageview');
        </script>
      `
    };

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>DžejEs - JavaScript pro web</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <link rel="stylesheet" type="text/css" href={this.props.files['main.css'] + '?v=' + require('../package').version} />
          <link rel="icon" type="image/png" href={favicon} />
          <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />
          <base target="_blank" />
        </head>
        <body>
          {this.state.renderPage && this.renderPage()}
          <script dangerouslySetInnerHTML={browserInitScriptObj} />
          <script src={this.props.files['main.js']}></script>
          <div dangerouslySetInnerHTML={googleAnalytics} />
        </body>
      </html>
    );
  }

  renderPage() {
    switch (this.props.location) {
    case Pages.HOME.location:
      return <HomePage />;
    }

    const pageKeys = Object.keys(Articles);
    for (let i = 0; i < pageKeys.length; i++) {
      const key = pageKeys[i];
      if (this.props.location === Articles[key].location) {
        return <Article page={key}
                        html={ArticleMap[key]} />;
      }
    }

    throw new Error(
      'Page of location ' +
        JSON.stringify(this.props.location) +
        ' not found.'
    );
  }

  componentDidMount() {
    if (!this.state.renderPage) {
      this.setState({
        renderPage: true
      });
    }
  }
}