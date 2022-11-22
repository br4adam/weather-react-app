import { useState } from "react"

const Searchbar = ({ setCity, isLoading }) => {
  const [ textFieldValue, setTextFieldValue ] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      setCity(textFieldValue)
      setTextFieldValue("")}}
    >
      <input 
        placeholder={isLoading ? "Loading..." : "Search a city"} 
        value={textFieldValue}
        onChange={(e) => setTextFieldValue(e.target.value)}
      />
    </form>
  )
}

export default Searchbar