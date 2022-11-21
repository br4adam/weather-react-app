import { useState } from "react"

const Searchbar = ({ setCity }) => {
  const [ textFieldValue, setTextFieldValue ] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      setCity(textFieldValue)}
    }>
      <input 
        placeholder="Search" 
        value={textFieldValue}
        onChange={(e) => setTextFieldValue(e.target.value)}
      />
    </form>
  )
}

export default Searchbar