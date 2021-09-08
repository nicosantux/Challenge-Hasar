import { useState, useEffect } from 'react'

import { getHoroscope } from '../services/getHoroscope'

export const useHoroscope = () => {
  const [horoscope, setHoroscope] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getHoroscope()
      .then(({ horoscopo }) => {
        setHoroscope(horoscopo)
        setIsLoading(false)
      })
      .catch(() => setError(true))

    return () => {
      setHoroscope()
      setIsLoading(true)
      setError(false)
    }
  }, [])

  return { horoscope, isLoading, error }
}
