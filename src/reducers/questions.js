import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ADD_QUESTION_ANSWER
} from '../actions/questions'

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION_ANSWER :
      const { answer, qid, authedUser } = action
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          }
        }
      }
    case ADD_QUESTION :
      const { question } = action
      return {
        ...state,
        [question.id]: {
          ...question
        }
      }
    default:
      return state
  }
}
