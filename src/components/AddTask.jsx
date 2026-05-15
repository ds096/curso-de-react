import { useState } from "react"

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="space-y-4 p-6 border bg-slate-200 rounded-md border-slate-400 shadow flex flex-col ">
            <input
                type="text"
                placeholder="Digite o título da tarefa"
                className="outline-slate-400 px-4 py-2 w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-slate-100 text-slate-700"
                value={title}
                onChange={(event) => setTitle(event.target.value)}>
            </input>

            <input
                type="text"
                placeholder="Digite a descrição da tarefa"
                className="outline-slate-400 px-4 py-2 w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-slate-100 text-slate-700"
                value={description}
                onChange={(event) => setDescription(event.target.value)}>
            </input>

            <button className="bg-slate-500 px-4 py-2 font-medium text-white p-2 rounded-md w-full"
                onClick={() => onAddTaskSubmit(title, description)}>
                Adicionar Tarefa
            </button>
        </div >
    )
}

export default AddTask