<!-- eslint-disable vue/multi-word-component-names -->
<template>
  

   <div class="navbar">
        <nav>
            
            
                <button @click="handleClick" class="btn">Logout</button>
                <router-link class="btn" to="/signup">Signup</router-link>
                <router-link class="btn" to="/login"> Login</router-link>
                <router-link class="btn" to="/"> Home</router-link>
            
        </nav>

   </div>
  
</template>

<script>

import useLogout from "@/composables/useLogout"
import { useRouter } from "vue-router"



export default {
    setup() {
        const { logout } = useLogout()
        const router = useRouter()

       const handleClick = async () => {
         await logout()
         console.log("user logged out")
        router.push( { name: 'LoginAuth' })
       }

       return { handleClick, logout}
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