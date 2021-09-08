import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { useUser } from '../hooks/useUser'
import Header from '../components/Header'
import GenderForm from '../components/GenderForm'
import UserInfoForm from '../components/UserInfoForm'
import { regex } from '../helpers/regex'
import { Main, BtnContainer, Btn, FormTitle, ErrorText } from '../elements/form'

const Form = () => {
  const { userInfo, setUserInfo } = useUser()
  const [formPage, setFormPage] = useState(1)
  const [genderError, setGenderError] = useState(null)
  const [infoError, setInfoError] = useState(null)
  const [date, setDate] = useState(new Date())
  const history = useHistory()

  const goBack = () => {
    setFormPage((page) => page - 1)
  }

  const goToUserInfo = () => {
    if (userInfo.gender === '') {
      setGenderError(true)

      return
    }
    setGenderError(false)
    setFormPage((page) => page + 1)
  }

  const goToHoroscope = () => {
    if (!regex.names.test(userInfo.name) || !regex.email.test(userInfo.email)) {
      setInfoError(true)

      return
    }
    setUserInfo({ ...userInfo, birthDate: date })
    setInfoError(false)
    history.push('/horoscope')
  }

  return (
    <>
      <Header
        formPage={formPage}
        setFormPage={setFormPage}
        title={formPage === 1 ? 'Tu Género' : 'Tus Datos'}
      />
      <Main>
        <FormTitle>{formPage === 1 ? 'Ingresa tu género' : 'Ingresa tus datos'}</FormTitle>

        {formPage === 1 && <GenderForm />}
        {formPage === 2 && <UserInfoForm date={date} setDate={setDate} />}

        {genderError && <ErrorText>Por favor elige tu género</ErrorText>}
        {infoError && <ErrorText>Por favor completa el formulario</ErrorText>}

        <BtnContainer>
          {formPage === 2 && (
            <Btn goBack={true} onClick={goBack}>
              Volver
            </Btn>
          )}
          {formPage === 1 && <Btn onClick={goToUserInfo}>Continuar</Btn>}
          {formPage === 2 && <Btn onClick={goToHoroscope}>Continuar</Btn>}
        </BtnContainer>
      </Main>
    </>
  )
}

export default Form
