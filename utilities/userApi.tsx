const userApi = {
    fetchData: () => {
        return fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => data)
    }
}

export default userApi;