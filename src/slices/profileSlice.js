// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     user: localStorage.getItem("user")? (JSON.parse(localStorage.getItem("user"))): null,
//     loading:false,
// }

// export const profileSlice = createSlice({
//     name:"profile",
//     initialState:initialState,
//     reducers:{
//         setProfile(state, value){
//             state.user = value.payload;
//         },
//         setLoading(state, value){
//             state.loading = value.payload;
//         }
//     }
// })

// export const {setProfile, setLoading} = profileSlice.actions;
// export default profileSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  loading: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setProfile, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
