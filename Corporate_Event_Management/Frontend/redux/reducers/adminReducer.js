// /redux/reducers/adminReducer.js
const initialState = {
  adminToken: "",
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADMIN_TOKEN":
      return { ...state, adminToken: action.payload };
    default:
      return state;
  }
};

export default adminReducer;
