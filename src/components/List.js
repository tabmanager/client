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

import EditList from './EditList'

// ---

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
            <CardBody className="card-body">
              <CardTitle>{tab.title}</CardTitle>
              <CardText>
                <a href={tab.website} target="_blank" rel="noopener noreferrer">{tab.website}</a>
                <br />
                <br />
                <span>{tab.short_description}</span>
              </CardText>
            </CardBody>
            <EditList 
            tab={tab}
            deleteList={this.props.deleteList}
            fetchLists={this.props.fetchLists}
            />
          </Card>
        ))}
      </div>
    )
  }
}

export default List