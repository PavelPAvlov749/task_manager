import  axios from "axios";
import { AxiosResponse } from "axios";

const API_KEY = "eb25692d-120e-4f50-87e4-23bbda95a3fe";

const instance = axios.create(
    {
        withCredentials:true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers:{
            "API-KEY": API_KEY,
        }
    }
);
//Decalring ENUMS for response result codes
export enum result_codes {
    Success = 0,
    Error = 1,
}
export enum result_code_for_captcha {
    captcha_is_requred = 10

}
//Declaring the types for responses
//Reposnse type for "set_my_id()" method,has no requred parametrs
type set_my_id_response_type = {
    data : {id :number,email :string,login :string} 
    resultCode : result_codes | result_code_for_captcha,
    messages : Array<string>,
}
//Response type for loging in method.Required arguments : 
//  formData object(from Redux-rorm) that contains login<string> , password<string> and rememerMe flag <boolean>
type login_response_type = {
    data:{
        userId: number
    },
    resultCode : result_codes,
    messages : Array<string>
}

export const usersAPI = {
    get_users(current_paige:number = 1,page_size:number = 8)
    {
        return instance.get(`users?page=${current_paige}&count=${page_size}`).then(response => {
            return response.data;
        })
    },
    get_profile(user_id:any){
        
        return instance.get(`profile/${user_id}`).then(response =>{
            console.log(response.data)
            return response.data
        })
    },
    follow(user_id:number){

        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${user_id}`).then(response=>{
            return response;
        })
    },
    unfollow(user_id:number){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user_id}`).then(response =>{
            return response;
        })
    },
    set_my_id(){
        return instance.get<set_my_id_response_type>(`auth/me`).then((response)=> {
            return response.data
            
        })
    },
    login(formData:any){
        return instance.post<login_response_type>(`auth/login`,{
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
    },
    set_photo (photo:any) {
        const formData = new FormData();
        formData.append("image",photo);

        return instance.put('profile/photo',formData,{
            headers: {
                "Content-Type" : "multipart/form=data"
            }
        }).then((response)=>{
            console.log("PHOTO API RESPONSE : ");
            console.log(response)
            
            return response;
        })
    }
};

export const ProfileApi = {
    get_profile(_id:any)
    {
        return instance.get(`profile/${_id}`).then((response)=>{
            return response.data;
        })
    },
    get_status(_id:number){

        return instance.get(`profile/status/${_id}`).then(response => response)
    },
    update_status(_text:string)
    {
        return instance.put(`profile/status`,{status:_text});
        
    },
    set_avatar(_path:string){
        return instance.put(`profile/photo`)
    }
}

let res : AxiosResponse<number>

