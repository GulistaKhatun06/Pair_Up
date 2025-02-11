import axios from "axios";


const BASE_URL =import.meta.env.MODE === "development" ?"http://localhost:3000/api":"/api";
export const axiosInstance = axios.create({
    baseURL :"",
    withCredentials:true,
})
