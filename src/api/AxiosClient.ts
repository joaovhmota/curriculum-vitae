import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.github.com/",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        "Content-Type": "application/json",
    },
});

export default axiosInstance;