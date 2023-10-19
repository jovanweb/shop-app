import axios from "axios";

export const reviews = (query = null) => {
    console.log("query",query)
    return axios.get(`https://dummyjson.com/comments${ query ? ('?' + new URLSearchParams(query).toString()) : ''}`)
}
