const getIconUrl = (data, colorScheme) => {
  const iconNumber = data.weather[0].icon.slice(0,2)
  return colorScheme === "light" 
    ? `/src/assets/icons/${iconNumber}d.png`
    : `/src/assets/icons/${iconNumber}n.png`
}

export default getIconUrl