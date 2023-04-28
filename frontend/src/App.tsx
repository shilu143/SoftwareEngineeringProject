import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  // Add an empty dependency array to trigger the effect only once

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element=<Home /> />
      </Routes>
    </div>
  )
}

export default App
