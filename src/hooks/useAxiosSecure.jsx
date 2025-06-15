import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";


export const axiosSecurely = axios.create({
    baseURL: "http://localhost:5000/"
})

const useAxiosSecure = () => {
    // const { userSignOut } = useAuth(); //error isse 0need to be solved
    const navigate = useNavigate()
    //request cases=>
    axiosSecurely.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')//getting token from local storage
        config.headers.authorization = `Have ${token}`//sending token with fetch request to server
        return config;
    },
        function (error) {
            Promise.reject(error)
        }
    );
    //response cases
    //useEffect used to navigate and logout user

    useEffect(() => {
        axiosSecurely.interceptors.response.use(function (response) {
            return response
        },
            async (error) => {
                const status = error.response.status;
                if (status === 401 || status === 403) {
                    // await userSignOut(); //error issue need to be solved
                    navigate("/join-us")
                }
                return Promise.reject(error);
            }
        )
    }, [navigate])

    return axiosSecurely
};

export default useAxiosSecure;