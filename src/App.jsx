import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTasks] = useState(
    [
      { id: 1, title: "Estudar React", completed: false },
      { id: 4, title: "Estudar Node.js", completed: false },
      { id: 2, title: "Fazer exercícios", completed: false },
      { id: 3, title: "Ler um livro", completed: false },
    ]
  )


  // Atualiza o campo "completed" da tarefa clicada
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });

    setTasks(newTasks);
  }

  // Deleta a tarefa clicada
  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className='w-full h-screen flex justify-center p-6 bg-slate-500 '>
      <div className=' w-200'>
        <h1 className='text-3xl text-slate-100 font-bold '>Gerenciador de Tarefas</h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />
        <AddTask />
      </div>
    </div>
  )
}

export default App
