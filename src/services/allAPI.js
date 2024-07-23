import SERVER_URL from "./baseUrl"
import { commonAPI } from "./commonAPI"

    // register api
export const registerAPI = async(user) =>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
    }
    
    // Login api
    export const loginAPI = async(user) =>{
        return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
    }