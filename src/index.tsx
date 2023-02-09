import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app'

// eslint-disable-next-line react/display-name
export default () => <App />

const appContainer = document.getElementById('app')
if (appContainer === null) {
  throw new Error('Element with id="app" is not found')
}

const root = ReactDOM.createRoot(appContainer)

export const mount = (Component: () => JSX.Element) => {
  root.render(<Component />)

  if (module.hot) {
    module.hot.accept('./app', () => {
      root.render(<Component />)
    })
  }
}

export const unmount = () => {
  root.unmount()
}