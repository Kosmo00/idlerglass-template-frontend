const fetcher = async (...args) => {
    try {
        const response = await fetch(...args)
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export default fetcher