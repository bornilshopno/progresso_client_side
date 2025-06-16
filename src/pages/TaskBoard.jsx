import {
    FaTasks,
    FaSpinner,
    FaCheckCircle,
    FaTrash,
    FaEdit,
} from "react-icons/fa";
import useTasks from "../hooks/useTasks";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { Link } from "react-router";

// setting styles and icons based on task status
const statusStyle = {
    "to-do": "bg-blue-200 border-2",
    "in-progress": "bg-amber-200 border-2",
    "done": "bg-green-200 border-2"
}

const statusIcons = {
    "to-do": <FaTasks />,
    "in-progress": <FaSpinner />,
    "done": <FaCheckCircle />
}

const TaskBoard = () => {
    const [alltasks, , refetch] = useTasks();
    const axiosPublicly = useAxiosPublic();
    const statusAll = ["to-do", "in-progress", "done"]

    console.log(alltasks)
    const handleDragEnd = async (result) => {
        const { source, destination } = result;
        console.log(result)
        if (!destination) return;
        console.log("have result", result)

    }

    const deleteTask = async (taskId) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                await axiosPublicly.delete(`/tasks/delete/${taskId}`);
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your task has been deleted.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
            } catch (error) {
                console.error("Error deleting task:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong.",
                    icon: "error",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        }
    };

    return (
        <>
            <h3 className='text-center text-lg py-5'>"Plan. Prioritize. Progress."</h3>

            <div>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        {statusAll.map((state, index) => (
                            <Droppable droppableId={index.toString()} key={state}>
                                {(provided) => (
                                    // taskbox
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={`${statusStyle[state]} border-red-950 border-4 p-4 rounded-xl`}
                                    >

                                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                            {statusIcons[state]}{state}
                                        </h3>
                                        <div className="space-y-3">
                                            {alltasks.filter((task) => task.status === state).map((task, idx) => (
                                                <Draggable
                                                    key={task._id}
                                                    draggableId={task._id}
                                                    index={idx}
                                                >
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className="p-4 shadow rounded-lg border bg-gray-500">

                                                            <h2 className={`statusStyle[state]`}>
                                                                {state}
                                                            </h2>

                                                            <h4 className="font-medium text-lg">
                                                                {task.title}
                                                            </h4>

                                                            <p>
                                                                {task.description}
                                                            </p>
                                                            <p>
                                                                {task.dueDate}
                                                            </p>

                                                            <div className="flex justify-between">
                                                                <div className="badge badge-info">
                                                                     {task.priority}
                                                                </div>
                                                                <div className="flex justify-end gap-2 mt-2">
                                                                    <Link
                                                                        to={`/update-task/${task._id}`}
                                                                        className="text-blue-500 hover:text-blue-700"
                                                                    >
                                                                        <FaEdit />
                                                                    </Link>
                                                                    <button
                                                                        onClick={() => deleteTask(task._id)}
                                                                        className="text-red-500 hover:text-red-700"
                                                                    >
                                                                        <FaTrash />
                                                                    </button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )}

                                                </Draggable>
                                            ))}

                                        </div>

                                    </div>
                                )
                                }

                            </Droppable>


                        ))}


                    </div>
                </DragDropContext>
            </div>
        </>
    );
};

export default TaskBoard;