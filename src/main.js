/**
 * 
 */
import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import BasicExample from './routes'
import Login from './pages/login'
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>, document.getElementById('root'))
}

render(BasicExample)

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./routes', () => {
    render(BasicExample)
  })
}
