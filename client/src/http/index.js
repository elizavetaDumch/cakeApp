import axios from "axios";

const $host = axios.create({ //не требует авторизации
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => { //подставляет токен к каждому запросу
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}` // локальное хранилище токена, куда они добавл. при авторизации
    return config
}

$authHost.interceptors.request.use(authInterceptor) //отрабатывает перед каждым запросом и отправляет токен в header auth

export { //
    $host,
    $authHost 
}