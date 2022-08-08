import { useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import instance from '../Axio'
import { useNavigate } from "react-router-dom";

export const UseData = () => {
    return useQuery(['Basic-site-setting'], fetchDatas)
}


const postSocial = (social) => {
    return instance.post('/api/v2/socialMedia', social)
}

const patchBasicSiteData = (social) => {
    return instance.patch('/api/v2/socialMedia', social)
}

const fetchNewDetails = () => {
    return instance('/api/v2/admin/add-new-details')
}

const fetchDatas = () => {
    return instance('/api/v2/admin/dashboard')
}

const postDataLogin = (data) => {
    return instance('/api/v2/admin/login', data)
}
// const fetchDatas = () => {
//     return axios.get('https://jsonplaceholder.typicode.com/posts')
// }


export const PostLoginData = () => {
    return useMutation(postDataLogin)
}


export const AddNewDetails = (onSuccess) => {
    return useQuery(['Add New Details'], fetchNewDetails)
}


export const UsepatchBasicSiteSetting = () => {
    return useMutation(patchBasicSiteData)
}

// Patch 

// patch for Social Media Links
export const UsePostSocial = () => {
    return useMutation(postSocial)
}




// Post

// =========================================================
// Post Email
const PostEmail = (mail) => {
    return instance.post('/api/v2/email', mail)
}
export const UsePostEmail = () => {
    return useMutation(PostEmail)
}
const postAppLink = (link) => {
    return instance.post('/api/v2/appLink', link)
}
export const UsePostAppLink = () => {
    return useMutation(postAppLink)
}
// Add New Details / Crete New Details Post
const postNewDetail = (addmember) => {

    return instance.post('/api/v2/admin/add-new-details', addmember)
}

export const UseCreteNewDetail = (onSuccess, onError) => {

    return useMutation(postNewDetail, {
        onSuccess,
        onError,
    })
}







// ============================================================
const fetchEmail = () => {
    return instance('/api/v2/settings/email')
}


// Get
// Site Setting Emsil

export const UsegetEmail = () => {
    return useQuery(['Email'], fetchEmail)
}


// 

const fetchStaffData = () => {
    return instance('/api/v2/admin/staffs')
}

export const UseStaffPanel = () => {
    return useQuery(['Staff_Full'], fetchStaffData)
}





// ==============================================================
// Put


// const putReligionEdit = (RId, Editmember) => {
//     return axios.put(`https://server.shehnayi.in/api/v2/admin/add-new-details/${RId}`, { Editmember })
// }


// export const UsePutReligionData = (RId) => {
//     return useMutation(["Put_Religion", RId], () => putReligionEdit(RId))
// }




// patch for add new Details Put



//====================================================