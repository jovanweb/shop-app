import axios from "axios";

export const comments = () => {
    return axios.get('https://dummyjson.com/comments')
}
