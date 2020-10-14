import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
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
        return instance.get(`profile/${userId}`)
    },
    
}


export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
    }
}





// export const getUsers = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`) //add whtn have apikey { withCredentials: true }
//         .then(response => response.data)
// }



