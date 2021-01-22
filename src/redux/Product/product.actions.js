import productTyeps from './product.types';

export const startAddProduct = (productData) => ({
  type: productTyeps.ADD_PRODUCT,
  payload: productData,
});

export const addProductSuccess = (status) => ({
  type: productTyeps.ADD_PRODUCT_SUCCESS,
  payload: status,
});
