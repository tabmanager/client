
import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

// ---

class Lists extends Component {
  render() {
    return (
        <div className="Lists">
            You logged in? Wow! Congrats! 
            <div>
                <Card>
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                    <CardFooter>Footer</CardFooter>
                </Card>
            </div>
        </div>
    );
  }
}

export default Lists; 