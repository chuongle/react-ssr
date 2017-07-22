import { createNetworkInterface } from 'react-apollo';

export default createNetworkInterface({
  uri: 'http://dev-d8-headless.pantheonsite.io/graphql',
  opts: {
    credentials: 'same-origin',
  },
})