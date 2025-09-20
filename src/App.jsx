import { useState } from "react"
import Button from "./components/Button"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>ДЗ 38.1 – React</h1>
      <p>Кількість: {count}</p>
      <Button text="Додати +1" onClick={() => setCount(count + 1)} />
    </div>
  )
}

export default App
