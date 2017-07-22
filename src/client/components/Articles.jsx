import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Article from './Article';
import { graphql } from 'react-apollo';
import ARTICLES_QUERY from '../graphql/articles';

class Articles extends Component {

  renderArticles() {
    return this.props.data.nodeQuery.entities.map((entity) => (
      <Article 
        key={entity.nid}
        title={entity.title} />
    ));
  }

  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      return (<div>An unexpected error occurred</div>)
    }

    return (
      <div className="wrapper">
        <Helmet>
          <title>Articles</title>
          <meta name="description" content="Articles Description" />
        </Helmet>
        {this.renderArticles()}
      </div>
    )
  }
}

export default graphql(ARTICLES_QUERY)(Articles);
