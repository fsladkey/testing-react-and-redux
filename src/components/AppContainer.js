import { connect } from 'react-redux';
import App from './App';

export function mapStateToProps({ fetching }) {
  return { fetching };
}

export default connect(mapStateToProps)(App);
