import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useNavigate, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { motion } from "motion/react"

const UpdateTask = () => {

    const axiosPublicly = useAxiosPublic();
    const [task, setTask]=useState(null)
    const navigate = useNavigate();
    const {id}= useParams();
  

    const { register, handleSubmit, reset } = useForm();

    useEffect(()=>{
        axiosPublicly.get(`tasks/${id}`).then((res)=>{
            setTask(res.data);
            reset(res.data)
        })
    },[axiosPublicly, id, reset]);

    const onSubmit = async (data) => {
        const updatedTask = {
            title: data.title,
            description: data.description,
            status: data.status,
            dueDate: data.dueDate,
            priority: data.priority          
        };

        try {
            await axiosPublicly.put(`/tasks/update-task/${id}`, updatedTask);
            Swal.fire({
                icon: "success",
                title: "Task updated successfully!",
                timer: 1500,
                showConfirmButton: false,
            });
              navigate("/progress-board");
        } catch (error) {
            console.error("Error updating task:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Something went wrong while updating the task!",
            });
        }
    };

  if (!task)
    return (
     <motion.div transition={{ type: "spring" }} animate={{ scale: 1.2 }} />
    );
    return (
        <div className="w-full  p-6 rounded-lg shadow-lg transition-all">
            <div className="w-full md:w-11/12 mx-auto">
                <h2 className="text-2xl font-bold text-center mb-4">Update Selected Task</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="form-control">
                        <label className="block font-medium">Task Title</label>
                        <input
                            type="text"
                            // placeholder="Enter task title"
                            {...register("title", {
                                required: "Task title is required",
                                maxLength: 50,
                            })}
                            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                       
                    </div>
                    <div className="form-control">
                        <label className="block font-medium">Description</label>
                        <textarea
                            // placeholder="Enter task description"
                            {...register("description", { maxLength: 200 })}
                            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <div className="form-control">
                        <label className="block font-medium">Task Priority</label>
                        <select
                            {...register("priority")}
                            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        
                    </div>

                     <div className="form-control">
                        <label className="block font-medium">Task Status</label>
                        <select
                            {...register("status")}
                            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Update Status</option>
                            <option value="to-do">To-Do</option>
                            <option value="in progress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                        
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
                        
                    </div>

                    <button
                        type="submit"
                        className="w-full btn rounded-lg"
                    >
                        Confirm and Update 
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;