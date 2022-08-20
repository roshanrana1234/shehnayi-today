import React from 'react'
import DataTable from 'react-data-table-component'
// import data from '../../Data/table.json'

const Table = ({ response }) => {


    const colunms = [
        {
            name: "Materi Id",
            selector: row => row._id
        },
        {
            name: "Name",
            selector: row => row.firstname + row.lastname
        },
        {
            name: "Email",
            selector: row => row.username
        },
        {
            name: "Gender",
            selector: row => row.gender
        },
        {
            name: "Marital Status",
            selector: row => row.status
        },
        {
            name: "Location",
            selector: row => row.city
        },
        {
            name: "Registered On",
            selector: row => row.registeredDate
        },
    ]

    return (
        <>
            <div className='mt-5' >
                <DataTable columns={colunms} data={response && response.foundUsers} />
            </div>
        </>
    )
}

export default Table