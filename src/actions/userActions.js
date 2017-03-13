import * as APIUtil from '../util/APIUtil';

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = users => {
  return { type: RECEIVE_USERS, users };
}

export const fetchUsers = users => dispatch => {
  return APIUtil.fetchUsers().then(users => {
    dispatch(userActions.receiveUsers(users));
  });
}

import * as userActions from './userActions';
