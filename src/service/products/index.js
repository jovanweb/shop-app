import { allProducts } from "@/api/products";

export const getProducts = async (skip) => {
    console.log("service",skip)
    try {
        // const skip = 0;
        const { data } = await allProducts(skip)

        // console.log("skip", data.skip)
        // console.log("service", data)
        return data

    } catch (e) {

        return e

    }
}