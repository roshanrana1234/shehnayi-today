import { useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import instance from '../Axio'
import { useNavigate } from "react-router-dom";
import { request } from '../InterCeptor/InterCeptor';

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

// Add New Details / Crete New Details Post
const postNewDetail = (addmember) => {

    return instance.post('/api/v2/admin/add-new-details/Caste', addmember)
}

export const UseCreteNewDetail = (onSuccess, onError) => {

    return useMutation(postNewDetail, {
        onSuccess,
        onError,
    })
}


const postLogo = (data) => {
    return instance.post('/api/v2/logo', data)
}

export const UsePostLogo = () => {
    return useMutation(postLogo)
}

const PostBasicSiteSetting = (data) => {
    return instance.post('/api/v2/basicSettings', data)
}
export const UseBasicsiteSetting = () => {
    return useMutation(PostBasicSiteSetting)
}

const PostAddEmail = (data) => {
    return instance.post('/api/v2/admin/email-templates', data)
}

export const UseAddEmail = () => {
    return useMutation(PostAddEmail)
}

const PostSMS = (data) => {
    return instance.post('/api/v2/admin/sms-templates', data)
}
export const UseSMS = () => {
    return useMutation(PostSMS)
}


const PostAppLink = (link) => {
    return instance.patch('/api/v2/appLink', link)
}
export const UseAPPLink = () => {
    return useMutation(PostAppLink)
}

const PostFAQs = (member) => {
    return instance.post('/api/v2/admin/faqs', member)
}
export const UseFAQsPost = (onSuccess) => {
    return useMutation(PostFAQs, { onSuccess })
}

// Admin Login
const PostLogin = (data) => {
    return instance.post('/api/v2/admin/login', data)
}

export const UseLogin = (onSuccess, onError) => {
    return useMutation(PostLogin, { onSuccess, onError })
}

const PostLogOut = (out) => {
    return request.post('/api/v2/admin/logout', out)
}

export const UseLogOut = (onSuccess, onError) => {
    return useMutation(PostLogOut, { onSuccess, onError })
}

const PostAboutUs = (data) => {
    return request.post('/api/v2/aboutUs', data)
}

export const UsePostAboutus = (onSuccess, onError) => {
    return useMutation(PostAboutUs, { onSuccess, onError })
}
// Post End Here============================================================
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


const fetchGetLogos = () => {
    return instance('/api/v2/logo')
}

export const UseGetLogos = () => {
    return useQuery(['Logo_get'], fetchGetLogos)
}

const fetchFAQs = () => {
    return instance('/api/v2/admin/faqs')
}

export const UseFAQs = () => {
    return useQuery(['get_FAQS'], fetchFAQs)
}

const fetchMemberData = () => {
    return instance('/api/v2/admin/user/allUsers')
}


export const UseMemberData = () => {
    return useQuery(['Add New Details'], fetchMemberData)
}


const FetchLeadGeneration = () => {
    return instance('/api/v2/admin/leadGeneration')
}

export const UseLeadGeneration = () => {
    return useQuery(['Lead-generation-data'], FetchLeadGeneration)
}


const GetAdmine = () => {
    return request({ url: "/api/v2/admin/dashboard" })
}
export const UseGetAdimine = (onSuccess) => {
    return useQuery(["Admin_Dashboard-datas"], GetAdmine, {
        onSuccess
    })
}

const GetAllMember = () => {
    return request({ url: "/api/v2/admin//user/allUsers" })
}
export const UseGetAllMember = (onSuccess) => {
    return useQuery(["Admin_All_member"], GetAllMember, {
        onSuccess
    })
}

const Getunapproved = () => {
    return request({ url: "/api/v2/admin/user/un-approved" })
}
export const UseGetMemberUnapproved = (onSuccess) => {
    return useQuery(["Admin_unapproved_member"], Getunapproved, {
        onSuccess
    })
}

const GetactivetoPaid = () => {
    return request({ url: "/api/v2/admin/user/approved" })
}
export const UseGetactiveToPaid = (onSuccess) => {
    return useQuery(["Admin_active_to_paid"], GetactivetoPaid, {
        onSuccess
    })
}


const Getpaidtospotlite = () => {
    return request({ url: "/api/v2/admin/user/paid" })
}
export const UseGetPaidtoSpotlite = (onSuccess) => {
    return useQuery(["Admin_Paid_to_spotlite"], Getpaidtospotlite, {
        onSuccess
    })
}
const Getsuspended = () => {
    return request({ url: "/api/v2/admin/user/suspended" })
}
export const UseGetSuspended = (onSuccess) => {
    return useQuery(["Admin_Suspended"], Getsuspended, {
        onSuccess
    })
}
const GetAboutUs = () => {
    return request({ url: "/api/v2/about-us" })
}
export const UseGetAboutUs = (onSuccess) => {
    return useQuery(["Admin_Aboutus"], GetAboutUs, {
        onSuccess
    })
}

const Getallmales = () => {
    return request({ url: "/api/v2/admin/dashboard/male" })
}
export const UseGetallMales = (onSuccess) => {
    return useQuery(["Admin_All_Member"], Getallmales, {
        onSuccess
    })
}

const GetallFemales = () => {
    return request({ url: "/api/v2/admin/dashboard/female" })
}
export const UseGetallFeMales = (onSuccess) => {
    return useQuery(["Admin_All_Member"], GetallFemales, {
        onSuccess
    })
}

const Getallpaid = () => {
    return request({ url: "/api/v2/admin/dashboard/paid" })
}
export const UseGetAllPaid = (onSuccess) => {
    return useQuery(["Admin_Paid"], Getallpaid, {
        onSuccess
    })
}

const Getallactiveuser = () => {
    return request({ url: "/api/v2/admin/dashboard/active" })
}
export const UseGetAllactiveusers = (onSuccess) => {
    return useQuery(["Admin_Active_users"], Getallactiveuser, {
        onSuccess
    })
}

const GetallLeadGeneration = () => {
    return request({ url: "/api/v2/admin/leadGeneration" })
}
export const UseGetLeadGeneration = (onSuccess) => {
    return useQuery(["Admin_Active_users"], GetallLeadGeneration, {
        onSuccess
    })
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

// Patch
const ChangePasswrdAdmin = (data) => {
    return request.patch('/api/v2/admin/changepass', data)
}

export const UseChangeAdminPassword = (onSuccess, onError) => {
    return useMutation(ChangePasswrdAdmin, { onSuccess, onError })
}