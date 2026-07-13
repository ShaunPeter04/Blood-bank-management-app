import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import AddDonor from './components/AddDonor'
import ViewDonors from './components/ViewDonors'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddDonor />} />
          <Route path='/view' element={<ViewDonors />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
