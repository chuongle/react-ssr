import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Article from './Article';
import { gql, graphql } from 'react-apollo';

class Articles extends Component {
  renderArticles() {
    return this.props.data.nodeQuery.entities.map((entity) => (
      <Article 
        key={entity.nid}
        title={entity.title} />
    ));
  }

  render() {
    console.log('get to aritlces')
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

// export default ContactList = graphql(ContactListQuery, {
//   options: (props) => ({
//     fetchPolicy: 'cache-and-network',
//     variables: {
//       filterId: props.contactFilter
//     },
//   }),
// })(ContactListComponent);

// export default Articles;
export default graphql(gql`query A {
  nodeQuery(filter: {type: "Article"}) {
    entities {
      ...on NodeArticle {
        title
        fieldImage {
          alt
          url
          thumbnailImage: derivative(style: thumbnail) {
            width
            height
            url
          }
        }
        body
        tags:fieldTags {
          entityId
          entityLabel
        }
      }
    }
  }
}`)(Articles)

