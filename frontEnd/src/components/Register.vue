<template>
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
</template>

<script>
import { ref } from 'vue';


const name = ref('')
const email = ref('')
const password = ref('')


</script>