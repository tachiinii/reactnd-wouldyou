import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import middleware from './middleware'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducers from './reducers'
import App from './components/App'

const store = createStore(reducers, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
