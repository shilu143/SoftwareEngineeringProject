import './App.css'
import { Route, Routes } from 'react-router-dom'
// import { useAuth, AuthContext } from './hooks/useAuth'
import Home from './pages/Home'
import Feed from './pages/Feed/Feed'
import CreatePost from './pages/CreatePost/CreatePost'

function App() {
  // const userToken = useAuth()

  return (
    // <AuthContext.Provider value={userToken}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/feed' element=<Feed /> />
        <Route path='/addpost' element=<CreatePost /> />
        </Routes>
      </div>
    // </AuthContext.Provider>
  )
}

export default App
