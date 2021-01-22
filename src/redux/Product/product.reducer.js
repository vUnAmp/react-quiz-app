import productTyeps from './product.types';

const INITIAL_STATE = {
  addProduct: true,
};
const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productTyeps.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProduct: action.payload,
      };

    default:
      return state;
  }
};
export default productReducer;
