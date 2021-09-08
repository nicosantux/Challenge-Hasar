import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useUser } from '../hooks/useUser'

const HoroscopeRoute = ({ children, ...props }) => {
  const { userInfo } = useUser()

  if (userInfo.gender === '' && userInfo.name === '' && userInfo.email === '') {
    return <Redirect to="/" />
  } else {
    return <Route {...props}>{children}</Route>
  }
}

export default HoroscopeRoute
