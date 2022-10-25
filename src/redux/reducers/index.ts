import { combineReducers } from 'redux';
import accountReducer from './account.reducer';

const Reducers = combineReducers({
    account: accountReducer
});

export default Reducers;
