import React from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  // Label,
  Input
} from 'reactstrap'

import { login } from './actions/actions'

// ---

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      email: '',
    }
    this.modalToggle = this.modalToggle.bind(this)
  }
  // componentDidMount(){
  //   if (this.props.user_id.length > 0 && this.props.token.length > 0){
  //     this.props.history.push('/tabs');
  //   }
  // }
  modalToggle() {
    this.setState({
      modal: !this.state.modal
    })
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  login = e => {
    e.preventDefault()
    axios
      .post('https://tab-manager.herokuapp.com/api/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user_id', res.data.user_id)
        this.props.history.push('/tabs')
      })
  }
  register = e => {
    e.preventDefault()
    axios
      .post('https://tab-manager.herokuapp.com/api/register', {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
      .then(res => {
        console.log(res)
        this.modalToggle();
        this.props.history.push('/tabs')
      })
  }
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-div login-one" />
        <div className="login-form-wrapper">
          <Form className="login-form" onSubmit={this.login}>
            {/* <Label for="username">username</Label> */}
            <div className="logo-tt"></div>
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
            <div />
            {this.props.error && <p className="error">{this.props.error}</p>}
            <div className="login-button-wrapper">
              <p onClick={this.modalToggle}>need an account?</p>
              <Button className="login-button">
                {this.props.loggingIn ? (
                  <Loader
                    type="ThreeDots"
                    color="#1f2a38"
                    height="12"
                    width="26"
                  />
                ) : (
                  'login'
                )}
              </Button>
            </div>
          </Form>
        </div>
        <div className="login-div login-two" />
        <div className="login-div login-three" />
        <div className="login-div login-four" />
        <div className="login-div login-five" />
        <button onClick={this.register}>Sign Up</button>
        <>
          <Button color="danger" onClick={this.modalToggle}>
            Sign Up
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.modalToggle}
            className="sign-up"
          >
            <ModalHeader toggle={this.modalToggle}>it's always thursday</ModalHeader>
            <ModalBody>
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
            <Input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="login-input"
            />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.register}>
                go tabless
              </Button>{' '}
              <Button color="secondary" onClick={this.modalToggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </>
      </div>
    )
  }
}

const mapStateToProps = ({ error, loggingIn, token, user_id }) => ({
  token,
  user_id
  // error,
  // loggingIn
})

export default connect(
  mapStateToProps,
  { login }
)(Login)

