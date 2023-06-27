import axios from "axios"

let baseUrl = "http://localhost:8000";

export default {
    getUsers() {
        return axios.get(`${baseUrl}/api/users`);
    },

    getUser(uid) {
        return axios.get(`${baseUrl}/api/users/` + uid);
    },

    updateUser(user) {
        return axios.put(`${baseUrl}/api/users/` + user._id, user)
    },

    deleteUser(uid) {
        return axios.delete(`${baseUrl}/api/users/` + uid)
    }

}

