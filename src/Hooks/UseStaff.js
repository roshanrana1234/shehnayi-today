import instance from "../Axio";
import { useQuery } from "@tanstack/react-query";



// Post request( Start Create)
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




// get Request ( end Read)
// =========================================================




// Patch request (start update)
// Patch request ( end update)



// Put request ( start update)
// Put request (end update)


// delete request ( start delete)
// delete request ( end delete)