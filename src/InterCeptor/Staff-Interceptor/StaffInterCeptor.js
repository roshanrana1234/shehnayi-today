import instance from "../../Axio";
import { getTokenStaff } from "../../Full Staff/localstorage";

const token = getTokenStaff("token")
console.log('token', token);
export const requestS = ({ ...options }) => {

    // instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    const onSuccess = (response) => response
    const onError = (error) => {
        //optionally catch errors and add additional logging here
        return error
    }
    return instance(options).then(onSuccess).catch(onError);
}
