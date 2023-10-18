<template>
  

   <div class="navbar">
        <nav>
            <h1><router-link :to="{ name: 'home'}">352 book</router-link></h1>
            <div class="links">
                <button>Logout</button>
                <router-link class="btn" to="/signup">Signup</router-link>
                <router-link class="btn" to="/login"> Login</router-link>
            </div>
        </nav>

   </div>
  
</template>

<script>
export default {

}

</script>
