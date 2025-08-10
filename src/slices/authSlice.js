import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     signUpDate:null,
//     loading: false,
//     token: localStorage.getItem("token")? (JSON.parse(localStorage.getItem("token"))) : (null),
// }

// export const authSlice = createSlice({
//     name:"auth",
//     initialState:initialState,
//     reducers:{
//         setLoading(state, value){
//             state.loading = value.payload;
//         },
//         setToken( state, value ){
//             state.token = value.payload;
//         },
//         setSignUpData(state, value){
//             state.signUpDate = value.payload;
//         }
//     }
// })

// export const {setToken, setSignUpData, setLoading} = authSlice.actions;
// export default authSlice.reducer;import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signUpData: null,
    loading: false,
    token: localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token"))
        : null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
        setSignUpData(state, action) {
            state.signUpData = action.payload;
        }
    }
})

export const { setToken, setSignUpData, setLoading } = authSlice.actions;
export default authSlice.reducer;
