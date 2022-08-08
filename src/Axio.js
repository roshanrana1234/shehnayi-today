import axios from 'axios'

const baseURL = (process.env.REACT_APP_API_URL);
console.log("BASEURL", baseURL);

// let headers = {};
// if (localStorage.token) {
//     headers.Authorization = `Bearer ${localStorage.taken}`
// }
console.log(process.env.REACT_APP_API_URL);
console.log(baseURL);
const instance = axios.create({
    baseURL: baseURL
});

export default instance