import axios from 'axios';
import { ENDPOINT } from '../server';

export const logout = async (_id) => {
  try {
    const data = await axios.post(`${ENDPOINT}/auth/logout/${_id}`, {
      _id,
    });

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};
