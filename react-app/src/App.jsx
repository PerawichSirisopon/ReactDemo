import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostClassComponent from './components/PostClassComponent'
import PostFunctionComponent from './components/PostFunctionComponent'
import Comment from './components/Comment'
import StateInClass from './components/StateInClass'
import StateInFunction from './components/StateInFunction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <StateInClass Name="Minnasan" />
      <StateInFunction Name="Perawich" />

    </>
  )
}

export default App