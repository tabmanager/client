import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { login } from './actions/actions'

// ---

class Login extends React.Component {
    constructor(){
        super();
        this.state= { 
            credentials: {
              username: '',
              password: ''
            },
            modal: false
        }
        this.modalToggle = this.modalToggle.bind(this);
    }
  modalToggle(){ 
    this.setState({ 
        modal: !this.state.modal
    })
  }
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  login = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push('/'));
  };
  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.login}>
          <label for="username">username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <div className="flex-spacer" />
          {this.props.error && <p className="error">{this.props.error}</p>}

          <button>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'Login'
            )}
          </button>
        </form>
        <>
        <Button color="danger" onClick={this.modalToggle}>Sign Up</Button>
        <Modal isOpen={this.state.modal} toggle={this.modalToggle} className="sign-up">
          <ModalHeader toggle={this.modalToggle}>"Sign Up"</ModalHeader>
          <ModalBody>
            <div>Sing Up Form</div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.modalToggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.modalToggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </>
      </div>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
