export const getFormattedDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export const getDateMinusSevenDays = (days, date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}
