export const setUser = (string) => {
  return {
    type: 'SET_USER',
    payload: string,
  };
};

export const deleteUser = () => {
  return {
    type: 'DELETE_USER',
  };
};
