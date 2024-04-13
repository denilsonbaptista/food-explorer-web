import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

import { NewDish } from './pages/NewDish'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NewDish />
    </ThemeProvider>
  </React.StrictMode>,
)