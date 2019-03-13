import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
// import { Link } from 'react-router-dom'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
  //   Form,
  //   Card,
  //   CardHeader,
  //   CardFooter,
  //   CardBody,
  //   CardTitle,
  //   CardText
} from 'reactstrap'

import { fetchLists, addList, deleteList } from './actions/actions'
import axiosWithAuth from '../axiosWithAuth'
import List from './List'

// ---

class Lists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newList: {
        title: '',
        website: '',
        short_description: '',
        category: '',
        date: '',
        user_id: this.props.user_id
      }
    }
    this.modalToggle = this.modalToggle.bind(this)
  }
  componentDidMount() {
    console.log(this.props.lists)
    const { user_id } = this.props
    this.props.fetchLists(user_id)
  }
  modalToggle() {
    this.setState({
      modal: !this.state.modal
    })
  }
  handleChange = e => {
    this.setState({
      newList: {
        ...this.state.newList,
        [e.target.name]: e.target.value
      }
    })
  }
  //  addList = e => {
  //     e.preventDefault();
  //     axiosWithAuth()
  //       .post(`https://tab-manager.herokuapp.com/api/tabs`, this.state.newList)
  //       .then(res => {
  //         console.log(res)
  //         if (Object.keys(this.props.state.lists).includes(this.action.payload.category)) {
  //           return {
  //             ...this.props.state,
  //             lists: {
  //               ...this.props.state.lists,
  //               [this.action.payload.category]: [
  //                 ...this.props.state.lists[this.action.payload.category],
  //                 this.action.payload
  //               ]
  //             }
  //           }
  //         } else {
  //           return {
  //             ...this.props.state,
  //             lists: {
  //               ...this.props.state.lists,
  //               [this.action.payload.category]: [this.action.payload]
  //             }
  //           }
  //         }
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  // }
  addList() {
    console.log(this.props.addList)
    this.props.addList(this.state.newList)
  }
  // deleteList = id => {
  //   const { user_id } = this.props
  //   this.props.deleteList(id)
  //   this.props.fetchLists(user_id)
  // }
  deleteList = id => {
    axiosWithAuth()
      .delete(`https://tab-manager.herokuapp.com/api/tabs/${id}`)
      .then(res => {
        console.log(res)
        this.props.fetchLists(this.props.user_id)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    if (this.props.fetchingLists === true) {
      return (
        <Loader
          type="Puff"
          className="loader"
          color="#B51A62"
          height={280}
          width={280}
        />
      )
    }
    // grab the categories off the Object
    const cats = Object.keys(this.props.lists)
    return (
      <div className="lists-wrapper">
        <div className="nav-bar">
          <i className="fas fa-plus" onClick={this.modalToggle} />
          <i className="fas fa-sign-out-alt" />
        </div>
        <div>
          {cats.map((cat, i) => (
            <List
              key={i}
              category={cat}
              tabs={this.props.lists[cat]}
              deleteList={this.deleteList}
              fetchLists={this.props.fetchLists}
            />
          ))}
          {/* {this.props.list.map(list => (
                <Card>
                    <CardHeader>{list.title}</CardHeader>
                    <CardBody>
                        <Link to={`/tabs/${list.id}`}>
                        <CardTitle></CardTitle>
                        <CardText></CardText>
                        </Link>
                        <Button onClick={() => this.deleteList(list.id)}>Delete</Button>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
                ))} */}
        </div>
        <>
          <footer>
            <i className="fas fa-copyright" />
            <p>2019 tabless thursday</p>
          </footer>
          <Modal
            isOpen={this.state.modal}
            toggle={this.modalToggle}
            className="sign-up"
          >
            <ModalHeader toggle={this.modalToggle}>add a tab</ModalHeader>
            <ModalBody>
              <Input
                type="text"
                name="website"
                placeholder="link"
                value={this.state.newList.website}
                onChange={this.handleChange}
                className="login-input"
              />
              <Input
                type="text"
                name="category"
                placeholder="don't make a mess—categorize your link!"
                value={this.state.newList.category}
                onChange={this.handleChange}
                className="login-input"
              />
              <Input
                type="text"
                name="title"
                placeholder="title"
                value={this.state.newList.title}
                onChange={this.handleChange}
                className="login-input"
              />
              <Input
                type="textarea"
                name="short_description"
                placeholder="hey! why'd you need this link, anyway?"
                value={this.state.newList.short_description}
                onChange={this.handleChange}
                className="login-input"
              />
              <Input
                type="text"
                name="date"
                placeholder="date"
                value={this.state.newList.date}
                onChange={this.handleChange}
                className="login-input"
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.props.addList(this.state.newList)}
              >
                add it!
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

const mapStateToProps = state => ({
  lists: state.lists,
  fetchingLists: state.fetchingLists,
  user_id: state.user_id
})

export default connect(
  mapStateToProps,
  {
    fetchLists,
    addList,
    deleteList
  }
)(Lists)
