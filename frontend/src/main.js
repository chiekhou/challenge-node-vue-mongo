import { createApp } from 'vue'
import router from './routes/router'

import App from './App.vue'
import store from './store.js'
import './axios'

import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"

createApp().config.productionTip = false

// Setting up default vue's http modules for api calls
createApp(App).config.globalProperties.$axios = axios;
axios.defaults.withCredentials = true;

// load the token from the localstorage
const token = localStorage.getItem("token")

// // // Is there is any token then we will simply append default axios authorization headers
if (token) {
    axios.defaults.headers.common['Authorization'] = token;
    console.log(token)
}

createApp(App).use(store).use(router).mount('#app')