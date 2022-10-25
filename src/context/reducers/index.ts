import { combineReducers } from 'redux';
import accountReducer from './account.reducer';
import eventReducer from './event.reducer';

const Reducers = combineReducers({
    account: accountReducer,
    events: eventReducer,
});

export default Reducers;
