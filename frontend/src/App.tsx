import './App.css'
import { Route, Routes } from 'react-router-dom'
// import { useAuth, AuthContext } from './hooks/useAuth'
import Home from './pages/Home'

function App() {
  // const userToken = useAuth()

  return (
    // <AuthContext.Provider value={userToken}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    // </AuthContext.Provider>
  )
}

export default App
