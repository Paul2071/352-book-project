<template>
    <div class="home">
     
      <div v-if="error" class="error" >Could not fetch data</div>
      <div v-if="documents"> 
        <ListView :booklist="documents" />
    
        <!-- 
          not sure if i need this :D:D:D <div v-for="doc in documents" :key = "doc.id">
        {{ doc.title }}
        </div> -->
      </div>
    </div>
 
    
  </template>
  
  <script>
 
 import ListView from '../components/ListView.vue'
  import getCollection from '../composables/getCollection'

  export default {
      name: 'HomeView',
      
      components: { ListView},
      
      setup() {

        const { error, documents } = getCollection('booklist')

          return { error, documents }
      },
      
  }
  </script>
  