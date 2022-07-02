import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

let token = localStorage.getItem("token");
let name = localStorage.getItem("name");

const initialState ={
    token:token,
    name:name,
    isLogged:token?true:false,
}

export const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        login:(state,action) => {
            axios.post("https://api.adoptez1artisan.com/auth/login",action.payload)
            .then(response => {
                localStorage.setItem("token", response.data.data.token);
                // console.log(response.data.data.userData.firstname);
                token =localStorage.getItem("token");
            if(token){
                axios.get('https://api.adoptez1artisan.com/user/appData',{
                    headers: { Authorization: `Bearer ${token}` }
                  })
                .then((response) => {
                    console.log(response.data);
                    name = response.data.data.user.fullname;
                    localStorage.setItem("name", name);
                    token = response.data.data.token;
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            })
            .catch(err => console.log(err))
            
           return{
               ...state,
               token:token,
               name:name,
               isLogged:true

           }
           
        },

        logout:(state) =>{
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            
            return {
                ...state,
                token:"",
                name:"",
                isLogged:false
            }
        }



    }
})
export const {login,logout} = loginSlice.actions
export default loginSlice.reducer