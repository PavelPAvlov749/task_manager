import  axios from "axios";
import { AxiosResponse } from "axios";
import { User_type } from "../Redux/Reducers";
import { Filter_type, photos_type } from "../Redux/users_reducers";
import { contacts_type } from "../Redux/users_reducers";

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
//Decalring Generic Response type,  
export type Response_type<D = {},RC = result_codes> = {
    data : D,
    resultCode : RC,
    messages : Array<string>
};

//Declaring the types for responses
//Reposnse type for "set_my_id()" method,has no requred parametrs
type set_my_id_response_type = {
    id :number,
    email :string,
    login :string 
}
//Response type for loging in method.Required arguments : 
//  formData object(from Redux-rorm) that contains login<string> , password<string> and rememerMe flag <boolean>
type login_response_type = {
     userId: number
}
//Declaring usersAPI.get_users() response type.Returns object with next properties :
//items<Array<UserType>>
//totalCount - number,show total number of all registred users
//error - null | string,string if error was occured
type get_users_items_type = {
    items: Array<User_type>,
    totalCount: number,
    error: string | null
};

export const usersAPI = {
    get_users(current_paige:number = 1,page_size:number = 8,filter: Filter_type)
    {
        return instance.get<get_users_items_type>(`users?page=${current_paige}&count=${page_size}&term=${filter.term}`+ (filter.friend === null ? "" : `&friend=${filter.friend}`))
        .then(response => {
            return response.data;
        })
    },
    get_profile(user_id:number){
        
        return instance.get<ProfileType>(`profile/${user_id}`).then(response =>{
            console.log(response.data)
            return response.data
        })
    },
    follow(user_id:number){

        return instance.post<Response_type>(`https://social-network.samuraijs.com/api/1.0/follow/${user_id}`).then(response=>{
            return response;
        })
    },
    unfollow(user_id:number){
        return instance.delete<Response_type>(`https://social-network.samuraijs.com/api/1.0/follow/${user_id}`).then(response =>{
            return response;
        })
    },
    set_my_id(){
        return instance.get<Response_type<set_my_id_response_type>>(`auth/me`).then((response)=> {
            return response.data
            
        })
    },
    login(formData:any){
        return instance.post<Response_type<login_response_type>>(`auth/login`,{
            email: formData.Login,
            password : formData.Password,
            rememberMe : formData.Remember_me
        }).then((response)=>{
            return response})
    },
    log_out () {
        return instance.delete<Response_type>(`auth/login`).then((response)=>{
            return response
        })
    },
    set_photo (photo:any) {
        const formData = new FormData();
        formData.append("image",photo);

        return instance.put<Response_type<photos_type>>('profile/photo',formData,{
            headers: {
                "Content-Type" : "multipart/form=data"
            }
            }).then((response)=>{return response;})
    }
};
export type ProfileType = {
    userID : number,
    lookingForAJob : boolean
    lookingForAJobDescription : string,
    fullName : string,
    contacts : contacts_type,
    photos : photos_type
}
type save_photo_type = {
    photos : photos_type
}
export const ProfileApi = {
    get_profile(_id:string | undefined)
    {
        return instance.get<ProfileType>(`profile/${_id}`).then((response)=>{
            return response.data;
        })
    },
    get_status(_id:any){

        return instance.get<string>(`profile/status/${_id}`).then(response => response)
    },
    update_status(_text:string)
    {
        return instance.put<Response_type>(`profile/status`,{status:_text});
        
    },
    set_avatar(_path:string){
        return instance.put<Response_type<save_photo_type>>(`profile/photo`)
    }
}

let res : AxiosResponse<number>

