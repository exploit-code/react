import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
)

