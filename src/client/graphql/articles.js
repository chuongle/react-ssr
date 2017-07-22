import { gql } from 'react-apollo';

export default gql`query Articles {
  nodeQuery{
    entities {
      ...on NodeArticle {
        title
        nid:entityId
      }
    }
  }
}`;
