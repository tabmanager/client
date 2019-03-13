import React from 'react';
import {
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Input,
    CardTitle,
    CardText
  } from 'reactstrap';

  import axiosWithAuth from '../axiosWithAuth';

// ---

class EditList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            editList: this.props.tab,
        }
        this.modalToggle = this.modalToggle.bind(this)
    }
    modalToggle() {
        console.log(this.state.editList)
        this.setState({
          modal: !this.state.modal
        })
    }
    handleChange = e => {
        this.setState({
            editList: {
                ...this.state.editList,
                [e.target.name]: e.target.value
            }
        })
    }
    editList = id => {
        console.log(id);
        const editList = this.state.editList
        axiosWithAuth()
          .put(`https://tab-manager.herokuapp.com/api/tabs/${id}`, editList)
          .then(res => {
            console.log(res);
            })
          .catch(err => {
            console.log(err)
            });
    }
    render(){
        return (
            <>
            <div className="tab-icon-wrapper">
                <i class="fas fa-edit" onClick={this.modalToggle}></i>
                <i class="fas fa-trash-alt" onClick={() => this.props.deleteList(this.props.tab.id)}></i>
            </div>
            <Modal
            isOpen={this.state.modal}
            toggle={this.modalToggle}
            className="sign-up"
            >
                <ModalHeader toggle={this.modalToggle}>edit a tab</ModalHeader>
                <ModalBody>
                    <Input
                        type="text"
                        name="website"
                        value={this.state.editList.website}
                        onChange={this.handleChange}
                        className="login-input"
                    />
                    <Input
                        type="text"
                        name="category"
                        value={this.state.editList.category}
                        onChange={this.handleChange}
                        className="login-input"
                    />
                    <Input
                        type="text"
                        name="title"
                        value={this.state.editList.title}
                        onChange={this.handleChange}
                        className="login-input"
                    />
                    <Input
                        type="textarea"
                        name="short_description"
                        value={this.state.editList.short_description}
                        onChange={this.handleChange}
                        className="login-input"
                    />
                    <Input
                        type="text"
                        name="date"
                        value={this.state.editList.date}
                        onChange={this.handleChange}
                        className="login-input"
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.editList(this.props.tab.id)}>
                        change it up!
                    </Button>{' '}
                    <Button color="secondary" onClick={this.modalToggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}

export default EditList;