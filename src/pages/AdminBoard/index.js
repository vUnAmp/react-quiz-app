import React from 'react';
import AddProducts from '../../components/AddProduct';
import Layout from '../../components/Layouts/layout';

const AdminBoard = () => {
  return (
    <Layout>
      <h1>Hello from AdminBoard</h1>
      <AddProducts />
    </Layout>
  );
};

export default AdminBoard;
