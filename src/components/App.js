import React from 'react';
import Spinner from './Spinner';
import UserListContainer from './UserListContainer';

export default function App({ fetching }) {
  return (
    <main>
      { fetching ? <Spinner /> : null }
      <h1>Github Users</h1>
      <UserListContainer />
    </main>
  );
}
