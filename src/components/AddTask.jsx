import { useState } from "react"
import ImputTask from "./ImputTask";

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="space-y-4 p-6 border bg-slate-200 rounded-md border-slate-400 shadow flex flex-col ">
            <ImputTask
                type="text"
                placeholder="Digite o título da tarefa"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <ImputTask
                type="text"
                placeholder="Digite a descrição da tarefa"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <button className="bg-slate-500 px-4 py-2 font-medium text-white p-2 rounded-md w-full"
                onClick={() => {
                    //Verifica campos em branco
                    if (!title.trim() || !description.trim()) {
                        alert("Por favor, preencha todos os campos.");
                        return;
                    }

                    onAddTaskSubmit(title, description)
                }}>
                Adicionar Tarefa
            </button>
        </div >
    )
}

export default AddTask