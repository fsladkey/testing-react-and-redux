import React from 'react';
import App from '../../src/components/App';
import Spinner from '../../src/components/Spinner';
import UserListContainer from '../../src/components/UserListContainer';
import { shallow } from 'enzyme';

describe("App", () => {

  it("displays a title", () => {
    const component = shallow(<App />);
    expect(component.text()).toContain("Github Users");
  });

  it("displays a list of users", () => {
    const component = shallow(<App />);
    expect(component.find(UserListContainer).length).toBe(1);
  });

  it("renders a spinner when fetching", () => {
    const component = shallow(<App fetching={ true }/>);
    expect(component.find(Spinner).length).toBe(1);
  });

  it("renders without a spinner when fetched", () => {
    const component = shallow(<App fetching={ false } />);
    expect(component.find(Spinner).length).toBe(0);
  });

  // it("renders without a spinner when fetched", () => {
  //   const component = shallow(<App fetching={ false } />);
  //   component.simulate('click', { currenTarget: { value: "lol" } });
  //   expect(component.state().clicked).toBe(true);
  // });

});
