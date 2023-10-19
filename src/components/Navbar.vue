<!-- eslint-disable vue/multi-word-component-names -->
<template>
  

   <div class="navbar">
        <nav>
            
            
                <button class="btn">Logout</button>
                <router-link class="btn" to="/signup">Signup</router-link>
                <router-link class="btn" to="/login"> Login</router-link>
                <router-link class="btn" to="/"> Home</router-link>
            
        </nav>

   </div>
  
</template>

<script>
export default {

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