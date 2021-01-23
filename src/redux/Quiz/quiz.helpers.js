import { firestore } from '../../firebase/utils';

export const handleAddQuestion = (data) => {
  return new Promise((resolve, reject) => {
    // try {
    //   setTimeout(() => {
    //     resolve('Successfully');
    //   }, 2000);
    // } catch (error) {
    //   reject(`This is a ${error}`);
    // }

    firestore
      .collection('question')
      .doc()
      .set(data)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
