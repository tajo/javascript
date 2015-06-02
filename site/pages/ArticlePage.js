import React from 'react';
import PageBody from '../components/PageBody';
import StaticHTMLBlock from '../components/StaticHTMLBlock';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class ArticlePage {
  render() {
    return (
      <div>
        <Header/>
        <PageBody>
          <StaticHTMLBlock html={this.props.html} />
        </PageBody>
        <Footer />

      </div>
    );
  }
}
