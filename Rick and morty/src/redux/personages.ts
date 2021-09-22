import {getPersonages} from "../services/getPersonage";

const SET_PERSONAGES_DATA="SET_PERSONAGES_DATA"
const SET_NAME="SET_NAME"
const SET_STATUS="SET_STATUS"
const SET_GENDER="SET_GENDER"

const initialState:any = {
    personagesData:null,
    name:null,
    status:null,
    gender:null

};


export const personagesReducer = (state=initialState, action:any) => {
    debugger
    switch (action.type) {
        case SET_PERSONAGES_DATA:
            return {
                ...state,
                personagesData: action.personagesData,
            };
        case SET_NAME :
            return {
                ...state,
                name:action.name
            }
        case SET_STATUS :
            return {
                ...state,
                status:action.status
            }
        case SET_GENDER :
            return {
                ...state,
                gender:action.gender
            }



        default:
            return state;
    }
};

export const setPersonagesDataActionCreator=(personagesData:any)=>({
    type:SET_PERSONAGES_DATA,
        personagesData
})
export const setNameActionCreator=(name:string)=>({
    type:SET_NAME,
    name
})
export const setStatusActionCreator=(status:string)=>({
    type:SET_STATUS,
    status
})
export const setGenderActionCreator=(gender:string)=>({
    type:SET_GENDER,
    gender
})


export const setPersonagesData = (name:string|null,status:string|null=initialState.status,gender:string|null) => async (dispatch: any) => {
    const data = await getPersonages(name,status,gender);
    dispatch(setPersonagesDataActionCreator(data))
};
// export const setCurrentTitleActionCreator=(currentTitle:any)=>({
//     type:SET_CURRENT_TITLE,
//     currentTitle
// })
