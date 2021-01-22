import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { startAddProduct } from '../../redux/Product/product.actions';

import Button from '../Shared/Button';
import FormInput from '../Shared/FormInput';

const categories = [
  {
    name: 'Select Categories',
    value: '',
  },
  {
    name: 'Phone case',
    value: 'phonecase',
  },
  {
    name: 'Batteries',
    value: 'batteries',
  },
  {
    name: 'Display',
    value: 'display',
  },
];

const mapState = ({ product }) => ({
  addProduct: product.addProduct,
});

const AddProducts = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productInventory, setProductInventory] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { addProduct } = useSelector(mapState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(!addProduct);

    dispatch(
      startAddProduct({
        productName,
        productCategory,
        productInventory,
        productPrice,
      })
    );
  };
  useEffect(() => {
    setLoading(true);
  }, [addProduct]);

  return (
    <div className="addProducts">
      {/* {loading && <div className="overlay">loading...</div>} */}
      <form onSubmit={handleSubmit}>
        <h3>Add Item</h3>
        <div className="formSelect">
          <label htmlFor="category">Categories</label>
          <select
            onChange={(e) => {
              setProductCategory(e.target.value);
            }}
            required
            name=""
            id="category"
            defaultValue={null}
          >
            {categories.map((item, index) => (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <FormInput
          type="text"
          handleChange={(e) => {
            setProductName(e.target.value);
          }}
          value={productName}
          placeholder="Item name"
          label="ITem name"
          required
        />
        <FormInput
          type="number"
          handleChange={(e) => {
            setProductInventory(e.target.value);
          }}
          label="Inventory"
          value={productInventory}
          placeholder="Item Inventory"
          required
        />
        <FormInput
          type="number"
          handleChange={(e) => {
            setProductPrice(e.target.value);
          }}
          label="Price"
          value={productPrice}
          placeholder="Item Price"
          required
        />
        <Button type="submit">Add Item</Button>
      </form>
    </div>
  );
};

export default AddProducts;
