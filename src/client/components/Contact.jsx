import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact</title>
          <meta name="description" content="Contact Description" />
        </Helmet>
        <h1>Contact Page</h1>
      </div>
    )
  }
}

export default Contact;