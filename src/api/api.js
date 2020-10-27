import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    header: {
       "API_KEY": '8e167f23-c7b4-4b46-9137-b0f89e4cdb9e'
    }
  
    
})


export const userAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) //add whtn have apikey { withCredentials: true }
            .then(response => response.data)
    },
    onfollow: (userId) => {
        return instance.post(`follow/${userId}`)
    },
    onunfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId) {
        console.warn('Obsolete method. Please use profileAPI')
        return profileAPI.getProfile(userId);
    },
    
}





export const profileAPI = {
    
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, { status: status })
    },

    savePhoto (file) {
        const formData = new FormData();
        formData.append("image", file)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }})
    },
    saveProfile (profile) {
        debugger
        return instance.put(`profile`, profile)
    },
    
}

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
    },
    logout () {
        return instance.delete(`auth/login`)
    },
  
    
}


export const securityAPI = {
    getCaptcha () {
        return instance.get(`security/get-captcha-url`)
    },
    
}


// export const getUsers = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`) //add whtn have apikey { withCredentials: true }
//         .then(response => response.data)
// }



