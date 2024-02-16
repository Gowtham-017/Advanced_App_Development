
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import adminReducer from './reducers/adminReducer';

const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
});

const store = createStore(rootReducer);

export default store;
