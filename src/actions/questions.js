import { saveAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addAnswer(answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    answer,
  }
}

export function handleSaveAnswer(answer, qid) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    return saveAnswer({
      authedUser,
      qid,
      answer,
    })
    .then((answer) => dispatch(addAnswer(answer)))
    .then(() => dispatch(hideLoading()))
  }
}
