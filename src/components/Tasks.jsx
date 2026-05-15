import { ChevronRightIcon, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Tasks(props) {

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        query.set("completed", task.completed)
        navigate(`/task?${query.toString()}`)
    }

    const navigate = useNavigate();

    return (
        <ul className="space-y-4 p-6  bg-slate-200 rounded-md shadow">
            {props.tasks.map((task) => (
                <li
                    key={task.id}
                    className="flex items-center justify-between  gap-2"
                >
                    <button
                        className={`bg-slate-400 text-white text-left p-2 rounded-md w-full ${task.completed && "line-through"}`}
                        onClick={() => props.onTaskClick(task.id)}
                    >
                        {task.title}
                    </button>

                    <button
                        className="bg-slate-400 p-2 rounded-md text-white"
                        onClick={() => {
                            onSeeDetailsClick(task)
                        }}>
                        <ChevronRightIcon />
                    </button>

                    <button
                        className="bg-slate-400 p-2 rounded-md text-white"
                        onClick={() => props.onTaskDelete(task.id)}
                    >
                        <TrashIcon />
                    </button>

                </li>
            ))}
        </ul>
    )
}

export default Tasks