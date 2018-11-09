import React, { Component } from 'react'
import { Card, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap'

class AddQuestion extends Component {

  state = {
    optionOne: '',
    optionTwo: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log('AddQuestion: (opt1 opt2) ', this.state)
  }

  render() {
    const { optionOne, optionTwo } = this.state
    return (
      <div className="question">
        <h2 className='page-title'>Add a Question</h2>
        <Card className='poll'>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for='optionOne'>Answer 1</Label>
                <Input
                  type='text'
                  name='optionOne'
                  placeholder='First option'
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='optionTwo'>Answer 2</Label>
                <Input
                  type='text'
                  name='optionTwo'
                  placeholder='Second option'
                  onChange={this.handleChange}
                />
                </FormGroup>
              <Button
                color='primary'
                disabled={optionOne === '' || optionTwo === ''}
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default AddQuestion
