import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  return (
    <div>
      <h1>Gerenciado de Tarefas</h1>
      <Tasks />
      <AddTask />
    </div>
  )
}

export default App
