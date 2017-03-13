import { connect } from 'react-redux';
import UserList from './UserList';
import { fetchUsers } from '../actions/userActions';

export function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);
