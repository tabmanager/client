import React from 'react';
import axios from 'axios';
import { Card, Button, CardHeader, CardFooter, CardBody, 
    Modal, ModalHeader, ModalBody, ModalFooter, Form, Input,
    CardTitle, CardText, } from 'reactstrap';


class List extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        console.log(this.props.categories)
    }
    
    render(){
        return(
            <div className="list-wrapper">
                {this.props.categories.map(category => (
                <Card>
                    <CardHeader></CardHeader>
                    <CardBody>
                        <CardTitle></CardTitle>
                        <CardText></CardText>
                        <Button>Delete</Button>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
                ))}
            </div>
        )
    }
}

export default List