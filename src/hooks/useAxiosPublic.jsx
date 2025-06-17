import axios from "axios";

const axiosPublicly = axios.create({
    // baseURL: "https://progresso-backend-phi.vercel.app/"
    // baseURL: "https://progresso-backend-optimisticashraf-5582-ashraf-mannas-projects.vercel.app"
    baseURL: "https://progresso-server-side-mongoose.onrender.com"
    // baseURL: "http://localhost:5000"
})

const useAxiosPublic = () => {
    return axiosPublicly
};

export default useAxiosPublic;