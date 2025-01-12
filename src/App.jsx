import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todoitem from './components/Todoitem'
import Header from './components/Header'

function App() {


  return (
    <div>
      <div className='todocon'>
        <Header title="Todooo"/>
        <Todoitem text="eat"/>
        <Todoitem text="code"/>
        <Todoitem text="play"/>
        <button>submit</button>
      </div>
    </div>
  )
}

export default App
