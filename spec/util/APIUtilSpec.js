import * as APIUtil from '../../src/util/APIUtil';
import { mockPromise } from '../helpers/mockPromise';

describe("APIUtil", () => {
  global.fetch = () => {};
  it("fetches from the correct url", () => {
    const url = 'https://api.github.com/users/fsladkey/following';
    const response = { json: () => ({}) };
    spyOn(global, "fetch").and.returnValue(mockPromise(response));

    APIUtil.fetchUsers()
    expect(fetch).toHaveBeenCalledWith(url);
  })
});
