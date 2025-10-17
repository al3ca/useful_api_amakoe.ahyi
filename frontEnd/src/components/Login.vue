<template>
    <div>
        <form>
            <div>
                <label for="email">Email</label>
                <input v-model="email" type="email">
            </div>

            <div>
                <label for="password">Password</label>
                <input v-model="password" type="text">
            </div>

            <div>
                <button @click.stop="loginUser">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
import { useAuthStore } from '@/Stores/AuthStore';
import { ref } from 'vue';


const name = ref('')
const email = ref('')
const password = ref('')


const loginUser = () => {
    const auth = useAuthStore()

    auth.login({
        email: email.value,
        password: password.value,
    })

    email.value = ''
    password.value = ''

    
}

</script>