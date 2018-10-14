import React, { Component } from 'react'

class AddQuestion extends Component {
  render() {
    return (
      <div className="question">
        <h2 className='page-title'>Add a Question</h2>
        <div className='poll'>
          <form>
            <label for='option1'>Answer 1</label>
            <input type='text' name='option1' placeholder='First option'/>
            <label for='option2'>Answer 2</label>
            <input type='text' name='option2' placeholder='Second option'/>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddQuestion
