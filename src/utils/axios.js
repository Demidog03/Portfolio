import axios from "axios";

const instance = axios.create({
    baseURL: 'https://demi-portfolio-backend.onrender.com/api'
})

instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance