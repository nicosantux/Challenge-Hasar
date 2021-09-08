import React from 'react'
import ReactDOM from 'react-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import esLocale from 'date-fns/locale/es'

import './index.css'
import App from './App'
import UserProvider from './context/UserProvider'

ReactDOM.render(
  <UserProvider>
    <MuiPickersUtilsProvider locale={esLocale} utils={DateFnsUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </UserProvider>,
  document.getElementById('root'),
)
