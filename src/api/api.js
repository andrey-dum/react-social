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
    onfollow (userId) {
        return instance.post(`follow/${userId}`)
    },
    onunfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId) {
        console.warn('Obsolete method. Please ues profileAPI')
        return profileAPI.getProfile(userId);
    },
    
}



export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
    }
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
    
}




// export const getUsers = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`) //add whtn have apikey { withCredentials: true }
//         .then(response => response.data)
// }



