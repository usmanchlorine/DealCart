import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name: 'Product',
    initialState: {
        featuredProducts: []
    },
    reducers: {
        fetchFeatureProducts: (state, action) => {
            state.featuredProducts = action.payload
        }
    }
})


export const  {fetchFeatureProducts}=ProductSlice.actions
export const ProductReducer=ProductSlice.reducer