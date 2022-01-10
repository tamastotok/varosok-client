import axios from 'axios';
import { ENDPOINT } from '../server';

export const login = async (email, password) => {
  try {
    const { data } = await axios.post(`${ENDPOINT}/auth/login`, {
      email,
      password,
    });

    return data;
  } catch (error) {
    alert(error.response.data);
    return false;
  }
};
