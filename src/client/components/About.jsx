import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>About</title>
          <meta name="description" content="About Description" />
        </Helmet>
        <h1>About Page</h1>
        <button onClick={() => alert('works!')}>Button here</button>
      </div>
    );
  }
}

export default About;
