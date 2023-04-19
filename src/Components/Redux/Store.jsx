import { configureStore } from '@reduxjs/toolkit'
import { CakeSlice } from './Slices/CakeSlice'

export const store = configureStore ({
    reducer: {
        CakesData: CakeSlice.reducer,
    }
})

export default store