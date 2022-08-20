import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    res: "",
}

export const staffTaskSlice = createSlice({
    name: 'res-info',
    initialState,
    reducers: {
        setResInfo: (state, action) => {
            state.res = action.payload.res
            // doesn't actually mutate the state because it uses the Immer library,


        },
        UnsetResInfo: (state, action) => {
            state.res = action.payload.res
        },

    },
})

// Action creators are generated for each case reducer function
export const { setResInfo, UnsetResInfo } = staffTaskSlice.actions

export default staffTaskSlice.reducer