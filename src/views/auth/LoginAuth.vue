<template>
   
    <form @submit.prevent="handleSubmit">
        <h3>LOGIN FORM</h3>
        <input type="email" placeholder="Enter email..." v-model="email">
        <input type="password" placeholder="Enter password..." v-model="password">
        <div v-if="error" class="error"> {{ error }}</div>
        
        <button v-if="!isPending">Log in</button>
        <button v-if="isPending" disabled>Loading...</button>
    </form>
</template>

<script >

import useLogin from "@/composables/useLogin.js"
import { ref } from "vue";


export default {
    name: 'LoginAuth',
      
      setup() {


        const {error, login, isPending } = useLogin()

        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
           
           const res = await login(email.value, password.value)
           if (!error.value) {
               console.log("User logged in")
               return res
            } 
       }


          return { email, password, error, login, handleSubmit, isPending} ;
      },

}
</script>

<style ></style>
