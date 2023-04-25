import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [backend, setBackendData] = useState([{}])
  useEffect(() => {
    axios.get('/api').then((res) => {
      console.log(res.data)
      setBackendData(res.data)
    })
  }, [])
  return (
    <>
      <h1>This is Home Page</h1>
      <h2> backend data = {backend.toString()}</h2>
    </>
  )
}

export default Home
