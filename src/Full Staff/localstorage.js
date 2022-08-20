const storeTokenStaff = (value) => {
    localStorage.setItem('token', value)
}

const getTokenStaff = () => {
    let token = localStorage.getItem('token')
    return token
}
const removeTokenStaff = () => {
    localStorage.removeItem('token')
}

export { storeTokenStaff, getTokenStaff, removeTokenStaff }