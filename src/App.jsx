import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Title from './components/Title'

function App() {

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

    //Add função para salvar tarefa no banco
  }

  // Adicionar tarefa
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false
    };

    setTasks([...tasks, newTask]);

    //Add função para salvar tarefa no banco
  }



  // useEffect para buscar tarefas do banco
  useEffect(() => {
    //Chamar API

    //Pegar os dados que ela retorna

    //Persistir os dados no estado
  }, [])


  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState(
    [
      { id: 1, title: "Estudar React", description: "Aprender os fundamentos do React", completed: false },
      { id: 4, title: "Estudar Node.js", description: "Entender o ambiente de runtime do Node.js", completed: false },
      { id: 2, title: "Fazer exercícios", description: "Resolver exercícios de programação", completed: false },
      { id: 3, title: "Ler um livro", description: "Ler um livro sobre comportamento humano", completed: false }
    ]
  )

  return (
    <div className='w-full flex justify-center p-6 bg-slate-500 h-full '>
      <div className='space-y-4 w-200'>
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />
      </div>
    </div>
  )
}

export default App
