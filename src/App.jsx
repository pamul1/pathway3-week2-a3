import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ComponentSoccer } from './Components/ComponentSoccer'
import { Componentasketball } from './Components/ComponentBasketball'
import { ComponentTennis } from './Components/ComponentTennis'
import { ComponentHome } from './Components/ComponentHome'
import { ComponentMenu } from './Components/ComponentMenu'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <ComponentMenu/>
      <Routes>
        <Route path="/soccer" element={ <ComponentSoccer/>}/>
        <Route path='/basketball' element={<Componentasketball />} ></Route>
        <Route path='/tennis' element={<ComponentTennis />} ></Route>
        <Route path='/' element={<ComponentHome />} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
