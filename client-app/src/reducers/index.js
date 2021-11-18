import { combineReducers } from 'redux';
import clientsReducer from './clientsReducer';

const rootReducer = combineReducers({ clientsReducer });

export default rootReducer;