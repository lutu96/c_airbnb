import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import {  ThemeProvider } from 'styled-components'

import App from './App'
import store from './store'
import theme from './assets/theme'

import 'normalize.css'
import '@/assets/css/index.less'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
    <Suspense fallback='loading'>
      <Provider store={store}>
        <HashRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </HashRouter>
      </Provider>
    </Suspense>
  // </React.StrictMode>
)
