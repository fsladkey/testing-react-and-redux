import { combineReducers } from 'redux';
import fetching from './fetchingReducer';
import users from './usersReducer';

export default combineReducers({ fetching, users });
