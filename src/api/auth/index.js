import axios from "axios";

export const login = (data) => {
    return axios.post('https://dummyjson.com/auth/login', data)
}
