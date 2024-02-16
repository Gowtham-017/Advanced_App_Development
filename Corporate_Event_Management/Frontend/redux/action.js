export const setUserToken = (token) => {
  return {
    type: "SET_USER_TOKEN",
    payload: token,
  };
};

export const setAdminToken = (token) => {
  return {
    type: "SET_ADMIN_TOKEN",
    payload: token,
  };
};
