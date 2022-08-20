import React, { useState, useEffect } from 'react'
import First from '../../DashBoardContent/First'
import Payments from '../../DashBoardContent/Payments'
import Table from '../../DashBoardContent/Table'
import Three from '../../DashBoardContent/Three'
import { UseGetAdimine } from '../../../Hooks/UseData'

const DashBoardContent = () => {
    const [response, setResponse] = useState({})
    // console.log(response);

    const onSuccess = (data) => {
        if (data) {
            setResponse(data.data)
        }
    }

    const { isLoading, isError, error, data } = UseGetAdimine(onSuccess)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }

    // useEffect(() => {
    //     const unsubscribe = navigate.addListener('focus', () => {
    //         alert('Refreshed');
    //     });
    //     return unsubscribe;
    // }, [navigate]);

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