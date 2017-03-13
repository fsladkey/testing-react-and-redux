import { RECEIVE_USERS } from '../../src/actions/userActions';
import usersReducer from '../../src/reducers/usersReducer';

describe("usersReducer", () => {
  it("is initially empty", () => {
    expect(usersReducer(undefined, { type: "init" })).toEqual([]);
  });

  it("can receive users", () => {
    const users = [];
    const action = { type: RECEIVE_USERS, users: [{ id: 1, login: "abc "}] };
    expect(usersReducer(users, action)).toBe(action.users);
    expect(usersReducer(users, action)).not.toBe(users);
  });

});
