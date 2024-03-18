import Button from "./components/Button"
import Card from "./components/Card"
import Student from "./components/Student"

function App() {

  return (
    <>
      <Card />
      <Button />
      <Student name="Test name" age={12} />
      <Student name="Second name" age={34} />
      <Student age={94} />
    </>
  )
  
}

export default App
