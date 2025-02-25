
const fetchAllProducts = () => {
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/products")
        const data = await response.json();
        resolve({ data })
    })
}
export const fetchAllProductsByFilters = (filter) => {

    // filter = {"category" : "smartphone"}
    let queryString = "";
    for (const key in object) {
        queryString += `${key}=${filter[key]}&`;
    }

    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/products?" + queryString)
        const data = await response.json();
        resolve({ data })
    })
}

export default fetchAllProducts
