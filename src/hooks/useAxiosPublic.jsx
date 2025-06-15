import axios from "axios";

const axiosPublicly = axios.create({
    baseURL: "http://localhost:5000/"
})

const useAxiosPublic = () => {
    return axiosPublicly
};

export default useAxiosPublic;