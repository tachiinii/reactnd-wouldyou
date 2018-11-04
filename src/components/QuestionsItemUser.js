import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionsItemUser extends Component {
  render() {
    return (
      <div className='questions-item-user'>
        <img
          src={this.props.avatar}
          alt={`Avatar for ${this.props.name}`}
          className='questions-avatar' />
        <p className='name'>{this.props.name} asks</p>
      </div>
    );
  }
}

function mapStateToProps({ users }, { author }) {
  return {
    name: users[author].name,
    avatar: users[author].avatarURL
  }
}

export default connect(mapStateToProps)(QuestionsItemUser)
