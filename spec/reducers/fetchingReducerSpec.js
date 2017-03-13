import { RECEIVE_USERS } from '../../src/actions/userActions';
import fetchingReducer from '../../src/reducers/fetchingReducer';

describe("fetchingReducer", () => {
  it("is initially true", () => {
    expect(fetchingReducer(undefined, { type: "init" })).toBe(true);
  });

  it("is set to false when users are received", () => {
    expect(fetchingReducer(true, { type: RECEIVE_USERS })).toBe(false);
  });

});
