import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './App'
import Footer from './components/Footer/Footer'
import rootReducer from './redux/reducers/rootReducer'
import initState from './redux/state'

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
