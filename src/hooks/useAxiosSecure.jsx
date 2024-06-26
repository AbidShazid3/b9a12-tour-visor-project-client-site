import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://tour-visor-server.vercel.app'
})

const useAxiosSecure = () => {
    const { logOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use(function (config) {
            const token = localStorage.getItem('access-token');
            // console.log('request stopped by interceptors before adding token', token);
            config.headers.authorization = `Bearer ${token}`;
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
        // Add a response interceptor
        axiosSecure.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, async (error) => {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            const status = error.response.status;
            // console.log('status error interceptor', status);
            if (status === 401 || status === 403) {
                await logOutUser();
                navigate('/login');
            }
            return Promise.reject(error);
        });
    }, [logOutUser,navigate])



    return axiosSecure;
};

export default useAxiosSecure;