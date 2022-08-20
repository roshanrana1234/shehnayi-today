import { configureStore } from '@reduxjs/toolkit';
import staffTaskRedure from "./features/freshStaffSlice";

export const store = configureStore({
    reducer: {

        staff: staffTaskRedure
    },
})