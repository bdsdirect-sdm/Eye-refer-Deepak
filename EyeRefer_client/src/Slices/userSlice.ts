import { createSlice } from "@reduxjs/toolkit";


const intilaState = {
    user_type:sessionStorage.getItem("user_type") ? JSON.parse(sessionStorage.getItem("user_type") as string): null,
    token:sessionStorage.getItem("token") ? JSON.parse(sessionStorage.getItem("token") as string) :null,
    user:sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("us") as string) : null,
    isLoading:false,
}

const userSlice = createSlice({
    name:"user",
    initialState: intilaState,
    reducers:{
        setDoctorType:(state,value) =>{
            state.user_type = value.payload;
            sessionStorage.setItem("user_type", JSON.stringify(value.payload))

        },
        setToken:(state,value) =>{
            state.token = value.payload;
            sessionStorage.setItem("token", JSON.stringify(value.payload))

        },
        setDoctor:(state,value) =>{
            state.user = value.payload
            sessionStorage.setItem("user", JSON.stringify(value.payload))

        },
        logout:(state) => {
            state.token = null;
            state.user_type = null;
            state.user = null;
            localStorage.clear(); 
            sessionStorage.clear();
        },
        setLoading:(state,value) =>{
            state.isLoading = value.payload;
        }
    }
})

export const {setToken,setDoctorType,logout,setDoctor,setLoading} = userSlice.actions;

export default userSlice.reducer;