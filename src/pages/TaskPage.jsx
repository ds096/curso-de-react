import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom"
import Title from "../components/Title";

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const taskTitle = searchParams.get("title");
    const taskDescription = searchParams.get("description");
    const taskCompleted = searchParams.get("completed");

    return (
        <div className='w-full h-full justify-center p-6 bg-slate-500 '>
            <div className='space-y-4'>
                <div className="flex justify-center relative mb-6 text-white">
                    <button
                        className=" absolute left-0 top-0 bottom-0"
                        onClick={() => { navigate(-1) }}>
                        <ChevronLeftIcon />
                    </button>
                    <Title>Detalhes da Tarefa</Title>
                </div>

                <div className="text-left bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl font-bold text-slate-600">
                        {taskTitle}
                    </h2>
                    <p className="text-slate-700 mt-2">
                        Descrição: {taskDescription}
                    </p>
                    <p className="text-slate-700 mt-2">
                        Status: {taskCompleted === "true" ? "Concluída" : "Pendente"}
                    </p>
                </div>

            </div>






        </div>
    )
}

export default TaskPage