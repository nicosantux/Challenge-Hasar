import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useUser } from '../hooks/useUser'
import { useRandomAvatar } from '../hooks/useRandomAvatar'
import Spinner from '../components/Spinner'
import { Main, Avatar, Btn } from '../elements/homePage'

const HomePage = () => {
  const { setUserInfo } = useUser()
  const { avatarURL, isLoading, error } = useRandomAvatar()
  const history = useHistory()

  useEffect(() => {
    setUserInfo({
      gender: '',
      name: '',
      email: '',
      birthDate: new Date(),
    })
  }, [setUserInfo])

  const goToForm = () => {
    history.push('/form')
  }

  return (
    <div>
      {error ? (
        <Main>
          <p>Hubo un error</p>
        </Main>
      ) : (
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <Main>
              <Avatar alt="Avatar" src={avatarURL} />
              <Btn onClick={goToForm}>Ingresar</Btn>
            </Main>
          )}
        </>
      )}
    </div>
  )
}

export default HomePage
