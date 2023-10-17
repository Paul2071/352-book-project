<template>
  <Navbar />
  <div>
    <router-link to="/">Home</router-link> I <router-link to="/login">login</router-link> I
    <router-link to="/signup">Signup</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>
