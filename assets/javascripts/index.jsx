import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import Page from './containers/Page.jsx'

let store = createStore(reducers)

ReactDOM.render(
  <Provider store = {store}>
      <Page />
   </Provider>,
  document.getElementById('content')
);
