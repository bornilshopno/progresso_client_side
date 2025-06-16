import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic.jsx';


const useTasks = () => {
    const axiosPublicly = useAxiosPublic();
    const {
        data: alltasks =[],
        isPending: loading,
        refetch} = useQuery({
            queryKey: ["alltasks"],
            queryFn: async () => {
                const result = await axiosPublicly.get("/tasks");
                return result.data
            }
        })
       

    return [alltasks, loading,refetch]
};

export default useTasks;