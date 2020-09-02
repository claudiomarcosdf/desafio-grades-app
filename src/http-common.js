import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
