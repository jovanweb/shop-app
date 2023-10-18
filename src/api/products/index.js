import axios from "axios";

export const allProducts = (query = null) => { 
    return axios.get(`https://dummyjson.com/products${ query ? ('?' + new URLSearchParams(query).toString()) : ''}`)
}

export const productCategories = () => {
    return axios.get('https://dummyjson.com/products/categories')
}

export const productFilter = (query = null) => {
    return axios.get(`https://dummyjson.com/products/category/${ query ? query : ''}`)
}

export const singleProduct = (query = null) => {
    return axios.get(`https://dummyjson.com/products/${ query ? query : ''}`)
}
