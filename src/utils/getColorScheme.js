const getColorScheme = (data) => {
  const daytime = data[0].weather[0].icon[2]
  return daytime === "d" ? "light" : "dark"
}

export default getColorScheme