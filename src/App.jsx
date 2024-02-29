import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import Login from './components/login-signup/Login.jsx'
import Register from './components/login-signup/Register.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login/>

    </>
  )
}

export default App
