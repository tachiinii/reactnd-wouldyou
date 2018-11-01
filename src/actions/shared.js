import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'

export default function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then((users) => {
        dispatch(receiveUsers(users))
      })
  }
}
