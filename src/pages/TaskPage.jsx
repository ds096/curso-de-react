import { useSearchParams } from "react-router-dom"

function TaskPage() {
    const [searchParams] = useSearchParams();
    const taskTitle = searchParams.get("title");
    const taskDescription = searchParams.get("description");
    const taskCompleted = searchParams.get("completed");

    return (
        <div
            className="h-screen w-full bg-slate-500 p-6">
            <p>{taskTitle}</p>
            <p>{taskDescription}</p>
            <p>Status: {taskCompleted ? "Concluída" : "Pendente"}</p>

        </div>
    )
}

export default TaskPage