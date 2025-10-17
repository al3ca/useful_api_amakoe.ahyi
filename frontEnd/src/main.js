import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './Routes/routes'
import { useAuthStore } from './Stores/AuthStore'
import { createPinia } from 'pinia'

const router = createRouter({
    history: createWebHistory(),
    routes
})


const pinia = createPinia()
const app = createApp(App);
app.use(router)
app.use(pinia);;
// const auth = useAuthStore().
app.mount('#app');

