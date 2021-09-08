import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Form from './pages/Form'
import Horoscope from './pages/Horoscope'
import { AppContainer } from './elements/app'
import HoroscopeRoute from './routes/HoroscopeRoute'

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <HoroscopeRoute exact path="/horoscope">
            <Horoscope />
          </HoroscopeRoute>
          <Route exact component={Form} path="/form" />
          <Route exact component={HomePage} path="/" />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App
