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
          <Card className="tabs" key={i}>
            <CardHeader className="cap">
            <img className="fav" src={tab.favicon} alt="website logo"/>
            <p>{tab.date}</p>
            </CardHeader>
            <CardBody>
              <CardTitle>{tab.title}</CardTitle>
              <CardText>
                <a href={tab.website}>{tab.website}</a>
                <p>{tab.short_description}</p>
              </CardText>
            </CardBody>
            <CardFooter className="cap">
            <i class="fas fa-trash-alt" onClick={() => this.props.deleteList(tab.id)}></i>
            <i class="fas fa-edit"></i>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }
}

export default List
