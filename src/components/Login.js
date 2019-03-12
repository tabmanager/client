import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input } from 'reactstrap';

import { login } from './actions/actions'

// ---

class Login extends React.Component {
    constructor(){
        super();
        this.state= { 
            username: '',
            password: ''
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
        [e.target.name]: e.target.value
    });
  };
  login = e => {
    e.preventDefault()
    axios.post('https://tab-manager.herokuapp.com/api/login', {username: this.state.username, password: this.state.password})
    .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
    })
  };
  register = e => {
    e.preventDefault()
    axios.post('https://tab-manager.herokuapp.com/api/register', {username: this.state.username, password: this.state.password})
    .then(res => {
        console.log(res)
    })
  }
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-div login-one"></div>
        <div className="login-form-wrapper">
            <Form className="login-form" onSubmit={this.login}>
            {/* <Label for="username">username</Label> */}
            <Input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
                className="login-input"
            />
            {/* <Label for="password">Password</Label> */}
            <Input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="login-input"
            />
            <div className="flex-spacer" />
            {this.props.error && <p className="error">{this.props.error}</p>}
            <div className="login-button-wrapper">
                <p>need an account?</p>
                <Button>
                    {this.props.loggingIn ? (
                    <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                    ) : (
                    'login'
                    )}
                </Button>
            </div>
            </Form>
        </div>
        <div className="login-div login-two"></div>
        <div className="login-div login-three"></div>
        <div className="login-div login-four"></div>
        <div className="login-div login-five"></div>
        <button onClick={this.register}>Sign Up</button>
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




// --- possible structure change

// class Login extends React.Component {
//     constructor(){
//         super();
//         this.state= { 
//             credentials: {
//               username: '',
//               password: ''
//             },
//             modal: false
//         }
//         this.modalToggle = this.modalToggle.bind(this);
//     }
//   modalToggle(){ 
//     this.setState({ 
//         modal: !this.state.modal
//     })
//   }
//   handleChange = e => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };
//   login = e => {
//     e.preventDefault();
//     this.props
//       .login(this.state.credentials)
//       .then(() => this.props.history.push('/'));
//   };




// submitHandler = event => {
//     this.setState({isLoading: true})
//     event.preventDefault();
//     axios.post(`https://guidr2.herokuapp.com/login`, this.state.user)
//     .then(resp => {
//         console.log("running token")
//         localStorage.setItem('token', resp.data.token)
//         this.setState({ isLoggedIn: true })
//       })
//     .then(() => {console.log("running token")
//       return  this.state.isLoggedIn ? this.loginUserTest() : null
//      } )
//     .catch(function (error) {
//         console.log(error);
//   })}


//   login = e => {
//     e.preventDefault();
//     this.props
//       .login({username: this.state.username, password: this.state.password})
//       .then(() => this.props.history.push('/lists'));