import * as axios from "axios";

const API_KEY = "eb25692d-120e-4f50-87e4-23bbda95a3fe";

const instance = axios.create(
    {
        withCredentials:true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers:{
            "API-KEY": API_KEY,
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
    },
    set_my_id(){
        return instance.get(`auth/me`).then((response)=> {
            return response
            
        })
    },
    login(formData){
        return instance.post(`auth/login`,{
            email: formData.Login,
            password : formData.Password,
            rememberMe : formData.Remember_me
        }).then((response)=>{
            return response})
    },
    log_out () {
        return instance.delete(`auth/login`).then((response)=>{
            return response
        })
    }
};

export const ProfileApi = {
    get_profile(_id)
    {
        return instance.get(`profile/${_id}`).then((response)=>{
            return response.data;
        })
    },
    get_status(_id){

        return instance.get(`profile/status/${_id}`).then(response => response)
    },
    update_status(_text)
    {
        return instance.put(`profile/status`,{status:_text});
        
    },
    set_avatar(_path){
        return instance.put(`profile/photo`)
    }
}