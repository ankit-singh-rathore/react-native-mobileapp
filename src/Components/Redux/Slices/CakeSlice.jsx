import { createSlice } from "@reduxjs/toolkit";

export const CakeSlice = createSlice ({
    name: 'cakes',
    initialState: [],
    reducers: {
        CakesAction: (state, action) => {
            state.push(action.payload)
        }
    }
})

// Action creators
export const {CakesAction } = CakeSlice.actions

export default CakeSlice.reducer