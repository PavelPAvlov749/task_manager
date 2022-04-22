import { InferActionType } from "./redux_store";
import { ProfileType } from "../API/api";
import { photos_type } from "./users_reducers";


const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_PHOTO = "SET_PHOTO";

let initial_state = {
    profile: {
        profile: null,
        photos: {
            large: null
        }
    }
}
type initiaal_state_type = typeof initial_state;
type Action_Type = InferActionType<typeof profile_actions>;

export const Profile_reducer = (state = initial_state, action:Action_Type) => {
    switch (action.type) {
        case SET_USERS_PROFILE:
            return { ...state, profile: action.profile }
        case SET_PHOTO:
            return { ...state, profile: { ...state.profile, photos: action.photo } }
        default:
            return state;
    }
};


export const profile_actions = {
    Set_users_profileAC: (profile:ProfileType) => ({
            type: "SET_USERS_PROFILE",
            profile: profile
        }as const),
    Set_photoAC: (photo:photos_type) => ({
            type: "SET_PHOTO",
            photo: photo
        }as const)
}
