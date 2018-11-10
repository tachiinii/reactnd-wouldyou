import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData, saveAnswer, saveQuestion } from '../utils/api'
import { receiveUsers, addUserAnswer } from '../actions/users'
import { receiveQuestions, addQuestion, addQuestionAnswer } from '../actions/questions'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function handleSaveAnswer(answer, qid) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    return saveAnswer({
      authedUser,
      qid,
      answer
    })
    .then(() => dispatch(addQuestionAnswer(authedUser, qid, answer)))
    .then(() => dispatch(addUserAnswer(authedUser, qid, answer)))
    .then(() => dispatch(hideLoading()))
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
    .then((question) => dispatch(addQuestion(question)))
    .then(() => dispatch(hideLoading()))
  }
}

