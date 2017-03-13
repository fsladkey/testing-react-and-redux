import { mapStateToProps } from '../../src/components/AppContainer';

describe("AppContainer", () => {
  describe("mapStateToProps", () => {
    it("returns the fetching portion of state", () => {
      const state = { fetching: true, users: [] };
      expect(mapStateToProps(state)).toEqual({ fetching: true });
    });
  });
});
