import React, { createContext, useState } from 'react'

export const userContext = createContext()

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    gender: '',
    name: '',
    email: '',
    birthDate: new Date(),
  })

  return <userContext.Provider value={{ userInfo, setUserInfo }}>{children}</userContext.Provider>
}

export default UserProvider
