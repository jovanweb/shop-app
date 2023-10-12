import axios from "axios";

export const allProducts = () => {
    return axios.get('https://dummyjson.com/products')
}

export const paginationProduct = () => {
    return axios.get('https://dummyjson.com/products/?skip=20&limit=30')
}
