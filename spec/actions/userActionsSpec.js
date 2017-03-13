import * as UserActions from '../../src/actions/userActions';
import * as APIUtil from '../../src/util/APIUtil';
import { mockPromise, mockDispatch } from '../helpers/mockPromise';
const { RECEIVE_USERS, receiveUsers } = UserActions;

describe("user actions", () => {
  const users = [{ id: 1 }];

  describe("receiveUsers", () => {
    it("returns the expected action", () => {
      expect(receiveUsers(users)).toEqual({ type: RECEIVE_USERS, users });
    });
  });

  describe("fetchUsers", () => {
    it("calls the APIUtil and dispatches users on success", () => {
      spyOn(APIUtil, 'fetchUsers').and.returnValue(mockPromise(users));
      spyOn(UserActions, 'receiveUsers');
      UserActions.fetchUsers()(mockDispatch);
      expect(APIUtil.fetchUsers).toHaveBeenCalled();
      expect(UserActions.receiveUsers).toHaveBeenCalledWith(users);
    });
  });
})
