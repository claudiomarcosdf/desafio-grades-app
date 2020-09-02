import axios from 'axios';
//Define a URL base da origem para consumo do servico

console.log('DOTENV: ' + process.env.REACT_APP_BASE_URL);
export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
