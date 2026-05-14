import { ChevronRightIcon } from "lucide-react"
function Tasks(props) {

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

                    <button className="bg-slate-400 p-2 rounded-md text-white">
                        <ChevronRightIcon />
                    </button>

                </li>
            ))}
        </ul>
    )
}

export default Tasks