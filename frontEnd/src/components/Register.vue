<template>
    <form>
        <div>
            <div>
                <label for="name">Name</label>
                <input v-model="name" type="text">
            </div>

            <div>
                <label for="email">Email</label>
                <input v-model="email" type="email">
            </div>

            <div>
                <label for="password">Password</label>
                <input v-model="password" type="text">
            </div>
        </div>

        <button @click.stop="registerUser">Submit</button>
    </form>
</template>


<script>
import { useAuthStore } from '@/Stores/AuthStore';
import { ref } from 'vue';


const name = ref('')
const email = ref('')
const password = ref('')


const registerUser = () => {
    const auth = useAuthStore()

    auth.register({
        email: email.value,
        password: password.value,
        name: name.value,
    })

    email.value = ''
    password.value = ''


}

</script>