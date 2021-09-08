import React from 'react'
import { useHistory } from 'react-router'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { useUser } from '../hooks/useUser'
import { HeaderContainer, NavBar, Title, IconContainer, Icon } from '../elements/header'

const Header = ({ title, formPage, setFormPage }) => {
  const { setUserInfo } = useUser()
  const history = useHistory()

  const goBack = () => {
    if (formPage === 2) {
      setFormPage((page) => page - 1)

      return
    }
    setUserInfo({
      gender: '',
      name: '',
      email: '',
      birthDate: new Date(),
    })
    history.push('/')
  }

  return (
    <HeaderContainer>
      <NavBar>
        <IconContainer>
          <Icon icon={faArrowLeft} onClick={goBack} />
        </IconContainer>
        <Title>{title}</Title>
      </NavBar>
    </HeaderContainer>
  )
}

export default Header
