import { useState } from "react"
import Button from "./components/Button"
import Card from "./components/Card"
import Student from "./components/Student"
import UserGreeting from "./components/UserGreeting"

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <Card />
      <Button setCounter={setCounter} counter={counter} />
      <Student name="Test name" age={counter} />
      {/* <Student name="Second name" age={34} />
      <Student age={94} /> */}
      
      <UserGreeting isLoggedIn={true} username="Name1"/>
      <UserGreeting isLoggedIn={false} username="Name2"/>
    </>
  )
  
}

export default App
