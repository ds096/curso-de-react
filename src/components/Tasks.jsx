import { Eye, TrashIcon, Pencil } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"


function Tasks(props) {

    // Function to handle the "See Details" button click
    function onSeeDetailsClick(task) {
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        query.set("completed", task.completed)
        navigate(`/task?${query.toString()}`)
    }


    // Function to handle the "Edit" button click
    function onEditClick(task) {
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        query.set("completed", task.completed)
        navigate(`/edit-task?${query.toString()}`)
    }




    const navigate = useNavigate();

    return (
        <ul className="space-y-4 p-6  bg-slate-200 rounded-md shadow">
            {props.tasks.map((task) => (
                <li
                    key={task.id}
                    className="flex items-center justify-between  gap-2"
                >
                    {/* Button with task title + status */}
                    <button
                        className={`bg-slate-400 text-white text-left p-2 rounded-md w-full ${task.completed && "line-through"}`}
                        onClick={() => props.onTaskClick(task.id)}
                    >
                        {task.title}
                    </button>

                    {/* Buttons for "See Details"*/}
                    <Button onClick={() => {
                        onSeeDetailsClick(task)
                    }}>
                        <Eye />
                    </Button>

                    {/* Buttons for "Edit" task*/}
                    <Button onClick={() => {
                        onEditClick(task)
                    }}>
                        <Pencil />
                    </Button>

                    {/* Buttons for "Delete" task*/}
                    <Button onClick={() => props.onTaskDelete(task.id)}>
                        <TrashIcon />
                    </Button>

                </li>
            ))}
        </ul>
    )
}

export default Tasks