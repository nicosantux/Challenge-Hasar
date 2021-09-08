export const getHoroscope = async () => {
  const url = process.env.REACT_APP_HOROSCOPE_URL

  try {
    const res = await fetch(url)
    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}
