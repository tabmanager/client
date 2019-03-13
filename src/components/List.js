import React from 'react'
// import axios from 'axios'
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  //   Modal,
  //   ModalHeader,
  //   ModalBody,
  //   ModalFooter,
  //   Form,
  //   Input,
  CardTitle,
  CardText
} from 'reactstrap'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props.tabs)
  }

  render() {
    return (
      <div className="list-wrapper">
        {this.props.tabs.map((tab, i) => (
          <Card key={i}>
            <CardHeader />
            <CardBody>
              <CardTitle>{tab.title}</CardTitle>
              <CardText />
              <Button>Delete</Button>
            </CardBody>
            <CardFooter />
          </Card>
        ))}
      </div>
    )
  }
}

export default List
