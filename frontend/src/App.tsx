import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Feed from './pages/Feed/Feed'
import CreatePost from './pages/CreatePost/CreatePost'

function App() {
  // Add an empty dependency array to trigger the effect only once

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element=<Home /> />
        <Route path='/feed' element=<Feed /> />
        <Route path='/addpost' element=<CreatePost /> />
      </Routes>
    </div>
  )
}

export default App
