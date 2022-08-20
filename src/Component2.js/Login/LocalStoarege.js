const storeTokenAdmine = (value) => {
    localStorage.setItem('token', value)
}

const getTokenAdmin = () => {
    let token = localStorage.getItem("token")
    return token
}

const removeTokenAdmine = () => {
    localStorage.removeItem('token')
}

export { storeTokenAdmine, getTokenAdmin, removeTokenAdmine }