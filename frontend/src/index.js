// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as FelaProvider } from 'react-fela'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import thunk from 'redux-thunk'
// Modules
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducers'
// Components
import App from './components/App'
// Style
import { renderer } from './styles/renderer'
import './styles/index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <ReduxProvider store={store}>
    <FelaProvider renderer={renderer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FelaProvider>
  </ReduxProvider>,
  document.getElementById('root')
)
registerServiceWorker()