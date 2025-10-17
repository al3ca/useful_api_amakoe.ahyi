import HomeView from "@/components/HomeView.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";


export const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },

    {
        path: '/register',
        name: 'register',
        component: Register,
    },

    {
        path: '/',
        name: 'home',
        component: HomeView,
    },

]

export default createRouter({
    history: createWebHistory(),
    routes
});