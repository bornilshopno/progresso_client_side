import axios from "axios";

const axiosPublicly = axios.create({
    baseURL: "https://progresso-backend-phi.vercel.app/"
})

const useAxiosPublic = () => {
    return axiosPublicly
};

export default useAxiosPublic;