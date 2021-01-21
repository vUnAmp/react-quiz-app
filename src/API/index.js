const urlAPI = `https://opentdb.com/api_token.php?command=request`;

export const getToken = () => {
  return fetch(urlAPI)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getQuestions = (sessionToken) => {
  return fetch(
    `https://opentdb.com/api.php?amount=10&category=18&encode=base64&token=${sessionToken}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.error(error);
    });
};

const configAPI = [
  {
    id: 18,
    category: 'Math',
  },
];
