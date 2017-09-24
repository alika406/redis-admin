import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers.jsx'
import Page from './containers/Page.jsx'

// 加上 middleware
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger(),
)(createStore)

const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store = {store}>
      <Page />
   </Provider>,
  document.getElementById('content')
)
