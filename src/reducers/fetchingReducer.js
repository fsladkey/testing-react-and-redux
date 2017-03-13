import { RECEIVE_USERS } from '../actions/userActions';

export default function fetchingReducer(state = true, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return false;
    default:
      return state;
  }
}
