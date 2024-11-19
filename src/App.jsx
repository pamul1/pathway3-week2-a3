import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ComponentSoccer } from './Components/ComponentSoccer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/soccer" element={ <ComponentSoccer/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
