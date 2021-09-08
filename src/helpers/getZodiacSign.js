import getMonth from 'date-fns/getMonth'
import getDate from 'date-fns/getDate'

export const getZodiacSign = (date) => {
  const month = getMonth(date)
  const day = getDate(date)

  switch (month) {
    case 0:
      if (day <= 20) {
        return 'capricornio'
      } else {
        return 'acuario'
      }
    case 1:
      if (day <= 19) {
        return 'acuario'
      } else {
        return 'piscis'
      }
    case 2:
      if (day <= 20) {
        return 'piscis'
      } else {
        return 'aries'
      }
    case 3:
      if (day <= 20) {
        return 'aries'
      } else {
        return 'tauro'
      }
    case 4:
      if (day <= 20) {
        return 'tauro'
      } else {
        return 'geminis'
      }
    case 5:
      if (day <= 21) {
        return 'geminis'
      } else {
        return 'cancer'
      }
    case 6:
      if (day <= 22) {
        return 'cancer'
      } else {
        return 'leo'
      }
    case 7:
      if (day <= 22) {
        return 'leo'
      } else {
        return 'virgo'
      }
    case 8:
      if (day <= 22) {
        return 'virgo'
      } else {
        return 'libra'
      }
    case 9:
      if (day <= 22) {
        return 'libra'
      } else {
        return 'escorpion'
      }
    case 10:
      if (day <= 22) {
        return 'escorpion'
      } else {
        return 'sagitario'
      }
    case 11:
      if (day <= 20) {
        return 'sagitario'
      } else {
        return 'capricornio'
      }
  }
}
