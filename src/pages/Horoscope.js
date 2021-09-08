import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import { useUser } from '../hooks/useUser'
import Header from '../components/Header'
import { useHoroscope } from '../hooks/useHoroscope'
import { getZodiacSign } from '../helpers/getZodiacSign'
import Spinner from '../components/Spinner'
import { nextBirthday } from '../helpers/nextBirthday'
import { getZodiacSignImage } from '../helpers/getZodiacSignImage'
import { Main, ImageContainer, Title, Text, BtnContainer, Btn } from '../elements/horoscope'

const Horoscope = () => {
  const history = useHistory()
  const { userInfo } = useUser()
  const { horoscope, isLoading, error } = useHoroscope()
  const [todayHoroscope, setTodayHoroscope] = useState()
  const daysToNextBirthday = nextBirthday(userInfo.birthDate)
  const sign = getZodiacSign(userInfo.birthDate)
  const image = getZodiacSignImage(sign)

  useEffect(() => {
    for (const zodiac in horoscope) {
      if (sign === zodiac) {
        setTodayHoroscope(`${horoscope[zodiac].amor}`)
      }
    }
  }, [userInfo.birthDate, horoscope, sign])

  const goToStart = () => {
    history.push('/')
  }

  return (
    <>
      <Header title="Tu Horóscopo" />
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
              <ImageContainer>{image}</ImageContainer>
              <Title>Hola {userInfo.name}</Title>
              <Text>Tu horóscopo para hoy dice:</Text>
              <Text>{todayHoroscope}</Text>
              {daysToNextBirthday === '365' ? (
                <Text>¡Hoy es tu cumpleaños!</Text>
              ) : (
                <Text>¡Faltan {daysToNextBirthday} días para tu cumpleaños!</Text>
              )}
              <BtnContainer>
                <Btn onClick={goToStart}>Continuar</Btn>
              </BtnContainer>
            </Main>
          )}
        </>
      )}
    </>
  )
}

export default Horoscope
