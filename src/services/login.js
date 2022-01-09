import axios from 'axios';
import { ENDPOINT } from '../server';

export const login = async (email, password) => {
  try {
    const { data } = await axios.post(`${ENDPOINT}/auth/login`, {
      email,
      password,
    });

    localStorage.setItem('_id', data._id);
    localStorage.setItem('name', data.name);
    localStorage.setItem('email', data.email);

    return true;
  } catch (error) {
    alert(error.response.data);
    return false;
  }
};
