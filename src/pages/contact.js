import React from 'react'
import { Link } from 'gatsby';
import { Header, Layout } from '../components';

export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  </Layout>
)