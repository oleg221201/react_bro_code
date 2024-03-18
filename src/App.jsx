import Button from "./components/Button"
import Card from "./components/Card"
import Student from "./components/Student"
import UserGreeting from "./components/UserGreeting"

function App() {

  return (
    <>
      <Card />
      <Button />
      <Student name="Test name" age={12} />
      <Student name="Second name" age={34} />
      <Student age={94} />
      
      <UserGreeting isLoggedIn={true} username="Name1"/>
      <UserGreeting isLoggedIn={false} username="Name2"/>
    </>
  )
  
}

export default App
