import axios from 'axios';
import { defineStore } from 'pinia';


export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        loading: null,
        success: null,
        error: null,
        token: null,
    }),
    getters: {
        isAuthenticated: (state) => !!state?.user
    },
    actions: {


        async login(loginData) {
            try {
                axios.post(`http://127.0.0.1:8000/api/login`, {
                    email: loginData.email,
                    password: loginData.password,
                })
                    .the(response => {
                        console.log("connected.......")
                    })
            } catch (error) {
                console.log(error);
            }
        },


        async register(loginData) {
            try {
                axios.post(`http://127.0.0.1:8000/api/register`, {
                    email: loginData.email,
                    password: loginData.password,
                    name: loginData.name
                })
                    .the(response => {
                        console.log("connected.......")
                    })
            } catch (error) {
                console.log(error);
            }
        }
    }
});
