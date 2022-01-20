import * as axios from "axios";

const API_KEY = "eb25692d-120e-4f50-87e4-23bbda95a3fe";

const instance = axios.create(
    {
        withCredentials:true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers:{
            "API-KEY": API_KEY
        }
    }
)

export const usersAPI = {
    get_users(current_paige = 1,page_size = 8)
    {
        return instance.get(`users?page=${current_paige}&count=${page_size}`).then(response => {
            return response.data;
        })
    },
    get_profile(user_id){
        return instance.get(`profile/${user_id}`).then(response =>{
            return response.data
        })
    },
    follow(user_id){

        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${user_id}`).then(response=>{
            return response;
        })
    },
    unfollow(user_id){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user_id}`).then(response =>{
            return response;
        })
    }
    
};