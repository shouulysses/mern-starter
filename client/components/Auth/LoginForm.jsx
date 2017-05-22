import React from 'react';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router';

//Import Images
import logo from '../../public/static/logo.png'

export default class Homepage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleLogin() {
    const {email, password} = this.refs;
    this.props.handleLogin(email.value, password.value);
    email.value = password.value = '';
  }
  
  render(){
    return (
      <div className="login-container">
        <div className="row login-box">
          <div className="col-12 col-md-6 left">
           <h1>Log In</h1>
            <Form onSubmit={this.handleLogin}>
              <Form.Field>
                <label htmlFor="login-email" className="label-field"><span className="label-field-name">Email</span></label>
                <input ref={email => (this.email = email)} name="email" type="text" required />
              </Form.Field>
              <Form.Field>
                <label htmlFor="login-password" className="label-field"><span className="label-field-name">Password</span></label>
                <input ref={password => (this.password = password)} name="password" type="password" required />
              </Form.Field>
              <div className="btn-group">
                <button className="btn-green" type="submit">Sign In</button>
              </div>
            </Form>
            <div className="mt2">
              <Link to="/signup">I want to Sign up</Link>
            </div>
          </div>
          <div className="col-12 col-md-6 right bg-sea-blue">
            <img src={logo} />
          </div>
        </div>
      </div>
    );
  }
};

