import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/AuthActions';
import LoginForm from '../../components/Auth/LoginForm';

class LoginContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleLogin(email, password) {
    const creds = {email, password};
    this.props.dispatch(Actions.loginUser(creds));
  }
  
  render() {
    return (
      <LoginForm handleLogin={this.handleLogin} />
    );
  }
}

function mapStateToProps(store) {
  return {
    isFetching: store.auth.isFetching,
    isAuthenticated: store.auth.isAuthenticated,
    message: store.auth.message
  };
}

LoginContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  message: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

LoginContainer.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(LoginContainer);