import { useContext } from 'react'

import { userContext } from '../context/UserProvider'

export const useUser = () => {
  const { userInfo, setUserInfo } = useContext(userContext)

  return { userInfo, setUserInfo }
}
