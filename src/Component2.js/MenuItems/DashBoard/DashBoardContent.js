import React, { useState, useEffect } from 'react'
import First from '../../DashBoardContent/First'
import Payments from '../../DashBoardContent/Payments'
import Table from '../../DashBoardContent/Table'
import Three from '../../DashBoardContent/Three'
import instance from '../../../Axio'
import { UseData } from '../../../Hooks/UseData'


const DashBoardContent = () => {
    const [response, setResponse] = useState({})
    // const { data } = UseData()
    // console.log(data);
    // console.log(data.data);


    useEffect(() => {
        async function fetchMyAPI() {
            try {
                console.log('Fetched');
                const res = await instance("/api/v2/admin/dashboard")
                console.log(res.data);
                setResponse(res.data)
                console.log(response);

            } catch (error) {

            }
        }
        fetchMyAPI()
    }, [])



    return (
        <>


            <First response={response} />
            <Payments response={response} />
            <Three response={response} />
            <Table response={response} />

            <div className='text-gray-500  my-200 p-3 my-12 flex justify-center' >
                @Copyright 2022 By shehnayi.com. All Rights Reserved

            </div>



        </>
    )
}

export default DashBoardContent