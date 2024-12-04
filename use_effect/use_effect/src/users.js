export const getAllUsers = setUsers => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => setUsers(json))
}