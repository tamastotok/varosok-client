import axios from 'axios';
import { ENDPOINT } from '../server';

export const logout = async (_id) => {
  try {
    const data = await axios.post(`${ENDPOINT}/auth/logout/${_id}`, {
      _id,
    });

    if (data) {
      localStorage.clear();
      localStorage.setItem('last-online', Date.now());
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
