import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: "",

        isAuthenticated: false,
    },
    reducers: {
        login: (state, action) => {
            console.log("yeh chala hai ")
            state.user = action.payload

            if (action.payload.token) {
                console.log("yeh chala hai ")
                sessionStorage.setItem("token", action.payload.token)
                state.isAuthenticated = true
            }
        }
    }
})


export const { login } = authSlice.actions
export const authReducer = authSlice.reducer