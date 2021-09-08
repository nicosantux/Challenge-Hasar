import { useState, useEffect } from 'react'

import { getRandomAvatar } from '../services/randomAvatar'

export const useRandomAvatar = () => {
  const [avatarURL, setAvatarURL] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getRandomAvatar()
      .then(({ results }) => {
        if (!Array.isArray(results)) {
          setError(true)
        }

        const avatar = results[0].picture.large

        setAvatarURL(avatar)
        setIsLoading(false)
      })
      .catch(() => setError(true))

    return () => {
      setAvatarURL('')
      setIsLoading(true)
      setError(false)
    }
  }, [])

  return { avatarURL, isLoading, error }
}
