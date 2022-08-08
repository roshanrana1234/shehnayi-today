import React from 'react'
import { UseData } from '../Hooks/UseData'


const Text = () => {
    const { isLoading, error, isError, data } = UseData()
    console.log(data);
    // console.log(data.data);
    // console.log(data.data.foundUsers[0].gender);
    // {
    //     data.data.foundUsers.map((e) => {
    //         console.log(e._id);
    //     })
    // }

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <div>Test Page</div>

            {
                data.data && data.data.foundUsers.map((value, index) => {
                    return <div key={index}>
                        {value.religion}
                    </div>
                })
            }
            {
                data.data?.foundUsers.map((value, index) => {
                    return <div key={index}>
                        {value._id}
                    </div>
                })
            }
        </>
    )
}

export default Text