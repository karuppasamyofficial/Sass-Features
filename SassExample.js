import React, { Component } from 'react'
import "./sassexaple.scss";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SassExample extends Component {
    render() {
        return (
            <div className="saabackground">
             <div className="sccssmap">   Login Form </div>
                {/* <div className="sccssmap">
                    Map function examples in scss
         </div> */}
                {/* <div className="scssnested">
                    <p className="scssnested_paragraph1"> nested function examples in scss  nested function examples in scss  nested function examples in scss  nested function examples in scss</p>
                    <p className="scssnested_paragraph2"> nested function examples in scss  nested function examples in scss  nested function examples in scss  nested function examples in scss</p>
                </div> */}
                <Form className="scssnested">
      <FormGroup  >
        <Label for="exampleEmail" sm={2} className="username">Username</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Username" />
        </Col>
      </FormGroup>
      <FormGroup >
        <Label for="exampleEmail" sm={2} className="password">Password</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Password" />
        </Col>
      </FormGroup>
      

      </Form>
      <div className="scssnested">
      <Button className="submitbtn">Submit</Button>
      <Button  className="cancelbtn">Cancel</Button>
      </div>
     
            </div>

        )
    }
}
