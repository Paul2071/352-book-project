<!-- eslint-disable vue/multi-word-component-names -->
<template>
  

   <div class="navbar">
        <nav>
            
               <div v-if="user">
                <router-link class="btn" to="/booklist/create">Add book</router-link>
                <button  class="btn">Hello, {{ user.displayName}}</button>
                <button @click="handleClick" class="btn">Logout</button>
               </div> 

               <div v-else>
                   <router-link class="btn" to="/signup">Signup</router-link>
                   <router-link class="btn" to="/booklist/create">Add book</router-link>
                   <router-link class="btn" to="/login"> Login</router-link>
               </div>
                <router-link class="btn" to="/"> Home</router-link>
            
        </nav>

   </div>
  
</template>

<script>

import useLogout from "@/composables/useLogout"
import getUser from "@/composables/getUser"
import { useRouter } from "vue-router"



export default {
    setup() {
        const { logout } = useLogout()
        const router = useRouter()
        const { user } = getUser()

       const handleClick = async () => {
         await logout()
         console.log("user logged out")
        router.push( { name: 'LoginAuth' })
       }

       return { handleClick, logout, user}
    }

}

</script>


<style scoped>

.navbar{
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
}

nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    
}



</style>