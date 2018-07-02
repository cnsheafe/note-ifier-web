///<reference types="webpack-env" />
// ^^^Use @typings for webpack such as "module"
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './app/app'

function renderApp() {
    ReactDOM.render(<App />, document.getElementById('react-root'))
}

renderApp()

if (module.hot) {
    module.hot.accept('./app/app', () => {
        renderApp()
    })
}