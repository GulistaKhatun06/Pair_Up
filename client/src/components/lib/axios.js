import axios from "axios";

//TODO UPDATE THE BASE URL HERE SO THAT IT WORKS IN THE DESCRIPTION

export const axiosInstance = axios.create({
    baseURL :"http://localhost:3000/api",
    withCredentials:true,
})
