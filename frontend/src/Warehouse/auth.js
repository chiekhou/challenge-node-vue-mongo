import axios from 'axios';
import router from '../routes/router';


const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null
};

const getters = {
    // isLoggedIn: function (state) {
    //         if(state.token != '') {
    //             return true
    //         }
    //         else {
    //             return false
    //         }
    //     }
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {

    // Register User
    async register({
        commit
    }, userData) {
        try {
            await commit('register_request');
            let res = await axios.post('/api/users/', userData);
            if (res.data !== undefined) {
                await commit('register_success');
            }
            return res;
        } catch (err) {
            await commit('register_error', err)
        }
    },

    // Login Action
    async login({ commit
    }, user) {
        commit('auth_request');
        try {
            let res = await axios.post('/api/users/login', user)
            if (res.data) {
                const token = res.data.token;
                const user = res.data;

                console.log(token);
                console.log(user);
                // Store the token into the localstorage
                localStorage.setItem("token", token);
                // Set the axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res;

        } catch (err) {
            await commit('register_error', err);
        }
    },


    // Get the user Profile
    async getProfile({
        commit
    }) {
        commit('profile_request');
        let res = await axios.get('api/users/profil');
        console.log(res);
        commit('user_profile', res.data)
        return res;
    },


    // Logout the user
    async logout({
        commit
    }) {
        await localStorage.removeItem('token');
        await commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login');
        return
    }
};

const mutations = {

    auth_request(state) {
        state.error = null
        state.status = 'loading'
    },

    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
    },
    auth_error(state, err) {
        state.error = err.response.data.msg
    },

    register_request(state) {
        state.error = null
        state.status = 'loading'
    },

    register_success(state) {
        state.error = null
        state.status = 'success'
    },

    register_error(state, err) {
        state.error = err.response.data.msg
    },

    logout(state) {
        state.error = null
        state.status = ''
        state.token = ''
        state.user = ''
    },

    profile_request(state) {
        state.status = 'loading'
    },

    user_profile(state, user) {
        state.user = user
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};