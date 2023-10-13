import axios from "axios";

export const allProducts = () => {
    return axios.get('https://dummyjson.com/products')
}

export const paginationProduct = (skip) => {
    return axios.get('https://dummyjson.com/products/?skip=' + skip + '&limit=30')
}
