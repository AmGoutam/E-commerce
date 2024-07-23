
const CounterAPI = () => {
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080")
        const results = await response.json();
        resolve({ data })
    })
}

export default CounterAPI
