import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import Login from "../views/auth/Login.vue"
import Register from "../views/auth/Register.vue"
import Profil from "../views/auth/Profil.vue"
import store from '../store';


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: "/login",
        name: 'login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    },
    {

        path: "/register",
        name: 'register',
        component: Register,
        meta: {
            requiresGuest: true
        }
    },
    {

        path: "/profil",
        name: 'profil',
        component: Profil,
        meta: {
            requiresAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            // Redirect to the Login Page
            next('/login');
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (store.getters.isLoggedIn) {
            // Redirect to the Login Page
            next('/profil');
        } else {
            next();
        }
    } else {
        next()
    }
});

export default router;