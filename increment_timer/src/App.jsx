import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Timer from './Components/Timer'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)




  return (
    <div className="App">
     <Timer/>
    
      
    </div>
  )
}

export default App
