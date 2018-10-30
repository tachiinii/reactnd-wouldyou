import React, { Component } from 'react'
import { Card, CardBody, CardText, Button, Form, FormGroup, Label, Input } from 'reactstrap'

class AddQuestion extends Component {
  render() {
    return (
      <div className="question">
        <h2 className='page-title'>Add a Question</h2>
        <Card className='poll'>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for='option1'>Answer 1</Label>
                <Input type='text' name='option1' placeholder='First option'/>
              </FormGroup>
              <FormGroup>
                <Label for='option2'>Answer 2</Label>
                <Input type='text' name='option2' placeholder='Second option'/>
                </FormGroup>
              <Button color='primary'>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default AddQuestion
