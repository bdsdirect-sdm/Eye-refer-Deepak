import { createSlice } from "@reduxjs/toolkit";


const intilaState = {
    user_type:localStorage.getItem("user_type") ? JSON.parse(localStorage.getItem("user_type") as string): null,
    token:localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token") as string) :null,
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("us") as string) : null
}

const userSlice = createSlice({
    name:"user",
    initialState: intilaState,
    reducers:{
        setDoctorType:(state,value) =>{
            state.user_type = value.payload;
            localStorage.setItem("user_type", JSON.stringify(value.payload))

        },
        setToken:(state,value) =>{
            state.token = value.payload;
            localStorage.setItem("token", JSON.stringify(value.payload))

        },
        setUser:(state,value) =>{
            state.user = value.payload
            localStorage.setItem("user", JSON.stringify(value.payload))

        },
        logout:(state) => {
            state.token = null;
            state.user_type = null;
            state.user = null;
            localStorage.clear(); 
            sessionStorage.clear();
        }
    }
})

export const {setToken,setDoctorType,logout,setUser} = userSlice.actions;

export default userSlice.reducer;