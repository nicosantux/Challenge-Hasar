export const getRandomAvatar = async () => {
  const url = process.env.REACT_APP_AVATAR_URL

  try {
    const res = await fetch(url)
    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}
