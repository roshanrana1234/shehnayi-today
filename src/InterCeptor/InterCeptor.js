import instance from "../Axio";
import { getTokenAdmin } from "../Component2.js/Login/LocalStoarege";

const token = getTokenAdmin("token")
console.log('token', token);


export const request = ({ ...options }) => {

    // instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    const onSuccess = (response) => response
    const onError = (error) => {
        //optionally catch errors and add additional logging here
        return error
    }
    return instance(options).then(onSuccess).catch(onError);
}
