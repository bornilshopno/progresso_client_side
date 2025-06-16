import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";


const AddTask = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const axiosPublicly = useAxiosPublic();
    const { user } = useAuth();
    //    const { title, description, priority, dueDate } = req.body;
    const onSubmit = async (data) => {
        try {
            const newTask = {
                title: data.title,
                description: data.description || "No description provided",
                priority: data.priority || "Low",
                dueDate: data.dueDate,
                createdBy: user.email || "Anonymous"
            };

            const response = await axiosPublicly.post("/tasks/add-task", newTask);
            if (response.data.insertedId) {
                reset();
                Swal.fire({
                    icon: "success",
                    title: "Task added successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error("Error adding task:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Something went wrong while adding the task!",
            });
        }
    };

    return (
        <div className="w-full p-6 pt-2 rounded-lg shadow-lg transition-all">
            <div className="w-full md:w-11/12 mx-auto">
                <h2 className="text-2xl font-bold text-center mb-4">Onboard Task with Details</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="form-control">
                        <label className="block font-medium">Task Title*</label>
                        <input
                            type="text"
                            placeholder="Enter task title"
                            {...register("title", {
                                required: "Task title is required",
                                maxLength: 50,
                            })}
                            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.title.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="block font-medium">Description (Optional)</label>
                        <textarea
                            placeholder="Enter task description"
                            {...register("description", { maxLength: 200 })}
                            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <div className="form-control">
                        <label className="block font-medium">Task Priority (Optional)</label>
                        <select
                            {...register("priority")}
                            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        {errors.priority && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.priority.message}
                            </p>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="block font-medium">Due Date*</label>
                        <input
                            type="date"
                            {...register("dueDate", {
                                required: "Due date is required",
                            })}
                            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.dueDate && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.dueDate.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full btn rounded-lg"
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;