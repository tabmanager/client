import React, { Component } from 'react'
import { connect } from 'react-redux'
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
import List from './List'

// ---

class Lists extends Component {
  constructor() {
    super()
    this.state = {
      newList: {
        title: '',
        website: '',
        short_description: ''
      }
    }
    this.modalToggle = this.modalToggle.bind(this)
  }
  componentDidMount() {
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
  addList() {
    this.props.addList(this.state.newList)
  }
  deleteList = id => {
    this.props.deleteList(id)
  }

  render() {
    // grab the categories off the Object
    const cats = Object.keys(this.props.lists)
    return (
      <div className="lists-wrapper">
        <div className="add-list">
          <i className="fas fa-plus" />
        </div>
        <div>
          {cats.map((cat, i) => (
            <List key={i} category={cat} tabs={this.props.lists[cat]} />
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
          <Button color="danger" onClick={this.modalToggle}>
            add
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.modalToggle}
            className="sign-up"
          >
            <ModalHeader toggle={this.modalToggle}>"Sign Up"</ModalHeader>
            <ModalBody>
              <Input
                type="text"
                name="title"
                placeholder="title"
                value={this.state.newList.title}
                onChange={this.handleChange}
                className="login-input"
              />
              <Input
                type="text"
                name="website"
                placeholder="link"
                value={this.state.newList.website}
                onChange={this.handleChange}
                className="login-input"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.addList}>
                Do Something
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
