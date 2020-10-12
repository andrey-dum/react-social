import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    // withCredentials: true,
    // API_KEY: ''
    
})


export const userApi = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) //add whtn have apikey { withCredentials: true }
            .then(response => response.data)
    }
    
}

// export const getUsers = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`) //add whtn have apikey { withCredentials: true }
//         .then(response => response.data)
// }



