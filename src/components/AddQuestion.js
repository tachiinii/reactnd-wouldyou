import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { handleAddQuestion } from '../actions/shared'

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
    const { dispatch, history } = this.props
    const { optionOne, optionTwo } = this.state

    dispatch(handleAddQuestion(optionOne, optionTwo))

    history.push('/')
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
                Add New Question
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default withRouter(connect()(AddQuestion))
