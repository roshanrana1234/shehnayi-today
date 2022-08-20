import instance from "../Axio";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { requestS } from "../InterCeptor/Staff-Interceptor/StaffInterCeptor";


// Post request( Start Create)
const PostLeads = (lead) => {
    // return instance.post('/api/v2/admin/leadGeneration', lead)
}
export const UsePostlead = () => {
    return useMutation(PostLeads)
}
const PostLoginStaff = (data) => {
    return instance.post('/api/v2/admin/staffLogin', data)
}

export const UseLoginStaff = (onSuccess, onError) => {
    return useMutation(PostLoginStaff, { onSuccess, onError })
}

// LogOut
// 

const PostLogOutStaff = (data) => {
    return requestS.post('/api/v2//staffs/logout', data)
}

export const UseLogOutStaff = (onSuccess, onError) => {
    return useMutation(PostLogOutStaff, { onSuccess, onError })
}
// Post request( end Create)



//Get ============================================================
// get Request ( start Read)
// #1 staff all data
const fetchStaffData = () => {
    return instance('/api/v2/admin/staffs')
}

export const UsegetStaffData = () => {
    return useQuery(["Staff_full_data"], fetchStaffData)
}

const GetStaff = () => {
    return requestS({ url: "/api/v2/staffs/dashboard" })
}
export const UseGetStaff = (onSuccess) => {
    return useQuery(["Staff_Dashboard-datas"], GetStaff, {
        onSuccess
    })
}

const fetchStaffAllMember = () => {
    return instance('/api/v2/staffs/members')
}

export const UsegetStaffAllMember = () => {
    return useQuery(["Staff_All_Member"], fetchStaffAllMember)
}

const fetchStaffAPProved = () => {
    return instance('/api/v2/staffs/members/approved')
}

export const UsegetStaffAPProved = () => {
    return useQuery(["APProved_member"], fetchStaffAPProved)
}

const fetchStaffPAid = () => {
    return instance('/api/v2/staffs/members/paid')
}

export const UsegetStaffPaid = () => {
    return useQuery(["Paid_member"], fetchStaffPAid)
}
const fetchStaffSuspended = () => {
    return instance('/api/v2/staffs/members/suspended')
}
export const UsegetStaffSuspended = () => {
    return useQuery(["Suspended_member"], fetchStaffSuspended)
}
const fetchStaffUnapproved = () => {
    return instance('/api/v2/staffs/members/un-approved')
}
export const UsegetStaffUnapproved = () => {
    return useQuery(["Unapproved_member"], fetchStaffUnapproved)
}
// get Request ( end Read)
// =========================================================




// Patch request (start update)

const PatchtLeads = (LId, PatchData) => {
    return instance.patch(`/api/v2/admin/leadGeneration/${LId}`, PatchData)
}
export const UsePatchLead = (Lid) => {
    return useMutation(["PatchtLeads", Lid], PatchtLeads)
}
// Patch request ( end update)



// Put request ( start update)
// Put request (end update)





// delete request ( start delete)
const DeleteLeads = ({ queryKey }) => {
    const DId = queryKey[1]
    return instance.delete(`/api/v2/admin/leadGeneration/${DId}`)
}
export const UseDelete = (DId) => {
    return useMutation(["Delete-Leads", DId], DeleteLeads)
    // return useMutation(["Delete-Leads",DId], (DId) => DeleteLeads(DId))
}

// delete request ( end delete)