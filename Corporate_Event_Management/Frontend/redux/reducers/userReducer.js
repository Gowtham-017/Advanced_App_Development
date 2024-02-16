// /redux/reducers/userReducer.js
const initialState = {
    userToken: '',
    };
    
    const userReducer = (state = initialState, action) => {
        switch (action.type) {
        case 'SET_USER_TOKEN':
            return { ...state, userToken: action.payload };
        default:
            return state;
        }
    };
    
export default userReducer;  