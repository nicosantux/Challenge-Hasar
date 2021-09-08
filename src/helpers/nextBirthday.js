import addYears from 'date-fns/addYears'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

export const nextBirthday = (date) => {
  const yearsToAdd = new Date().getFullYear() - date.getFullYear() + 1
  const addYear = addYears(date, yearsToAdd)
  const daysToBirthday = formatDistanceToNowStrict(addYear, { unit: 'day' })

  return daysToBirthday.split(' ')[0]
}
