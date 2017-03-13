import 'jsdom-global/register';
import React from 'react';
import UserList from '../../src/components/UserList';
import { mount, shallow } from 'enzyme';

describe("UserList", () => {

  it("fetches users on mount", () => {
    const props = { fetchUsers: jasmine.createSpy(), users: [] };
    const component = mount(<UserList { ...props } />);
    expect(props.fetchUsers).toHaveBeenCalled();
  });

  // it("displays users", () => {
  //   const props = { users: [] };
  //   const component = shallow(<UserList { ...props } />);
  //   props.users.forEach(user =>
  //     expect(component.text()).toContain(user.login)
  //   );
  // });

  it("displays users", () => {
    const props = { users: [
      { id: 1, login: "abc" },
      { id: 2, login: "def" }
    ] };
    const component = shallow(<UserList { ...props } />);
    props.users.forEach(user =>
      expect(component.text()).toContain(user.login)
    );
  });

});
