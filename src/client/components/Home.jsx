import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home Description" />
        </Helmet>
        <h1>Home Page</h1>
      </div>
    )
  }
}

export default Home;