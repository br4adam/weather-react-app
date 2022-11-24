const convertDate = (dateStr) => {
  const day = Number(dateStr.slice(8,10))
  const today = new Date().getDate()
  if (today === day) {
    return `Today ${dateStr.slice(11,16)}`
  }
  if (today+1 === day) {
    return `Tomorrow ${dateStr.slice(11,16)}`
  }
  return dateStr.slice(5,16)
}

export default convertDate