import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import Login from "../views/auth/Login.vue"
import Register from "../views/auth/Register.vue"
import Profil from "../views/auth/Profil.vue"
import AdminLayout from "../views/admin/Layout.vue"
import Dashboard from "../views/admin/Dashboard.vue"
import Reset from "../components/Reset.vue"

import UserIndex from "../views/admin/users/UserIndex.vue"
import UserEdit from "../views/admin/users/UserEdit.vue"
import UserAdd from "../views/admin/users/UserAdd.vue"

import store from '../store';
import { authGuard } from '../_helpers/auth-guard'


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },

    {
        path: '/admin',
        name: 'admin',
        component: AdminLayout,
        children: [
            { path: 'dashboard', name: 'dashboard', component: Dashboard },
            { path: 'users/edit/:id(\\d+)', name: 'uEdit', component: UserEdit, props: true },
            // { path: 'users/index', component: UserIndex },

            // { path: 'users/add', component: UserAdd }
        ]
    },

    {
        path: "/login",
        name: 'login',
        component: Login,
        // meta: {
        //     requiresGuest: true
        // }
    },
    {

        path: "/register",
        name: 'register',
        component: Register,
        // meta: {
        //     requiresGuest: true
        // }
    },
    {

        path: "/profil",
        name: 'profil',
        component: Profil,
        meta: {
            requiresAuth: true
        }
    },

    {

        path: "/reset",
        name: 'reset',
        component: Reset,

    },

    {
        path: "/:pathMatch(.*)*", redirect: '/'
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
            console.log(store.getters.isLoggedIn);
            console.log(record.meta.requiresGuest);
            // Redirect to the Login Page
            next('/profil');
        } else {
            next();
        }
    } else {
        next()
    }
});

// Vérouillage de la partie admin (token)
router.beforeEach((to, from, next) => {
    if (to.matched[0].name == 'admin') {
        authGuard();
    }
    next()
})

export default router;