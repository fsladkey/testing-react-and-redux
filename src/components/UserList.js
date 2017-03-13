import React, { Component } from 'react';

export default class UserList extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const users = this.props.users.map(user =>
      <li key={ user.id }>
        <img src={ user.avatar_url } />
        <h4>{ user.login }</h4>
      </li>
    );

    return (
      <ul>
        { users }
      </ul>
    );
  }
}
