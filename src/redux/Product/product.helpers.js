import { firestore } from '../../firebase/utils';

export const handleAddProduct = (product) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc()
      .set(product)
      .then(() => {
        resolve(false);
      })
      .catch((err) => {
        reject(true);
      });
  });
};
