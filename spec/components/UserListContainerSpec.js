import { mapStateToProps } from '../../src/components/UserListContainer';

describe("UserListContainer", () => {
  describe("mapStateToProps", () => {
    it("returns the users portion of state", () => {
      const state = { fetching: true, users: [] };
      expect(mapStateToProps(state)).toEqual({ users: [] });
    });
  });
});
