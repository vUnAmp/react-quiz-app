import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layouts/layout';

const AboutUs = () => {
  return (
    <Layout>
      <h1>Hello from About page</h1>
      <Link to="/login">Go back Login</Link>
    </Layout>
  );
};

export default AboutUs;
