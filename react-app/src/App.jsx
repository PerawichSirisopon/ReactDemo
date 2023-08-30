import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostClassComponent from './components/PostClassComponent'
import PostFunctionComponent from './components/PostFunctionComponent'
import Comment from './components/Comment'
import StateInClass from './components/StateInClass'
import StateInFunction from './components/StateInFunction'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <StateInClass />
      <StateInFunction />
      <Card />

    </>
  )
}

export default App