<template>
    <div class="home">
     
      <div v-if="error" class="error" >Could not fetch data</div>
      <div v-if="documents"> 
        <div v-for="doc in documents" :key = "doc.id">
        {{ doc.title }}
        </div>
      </div>
    </div>
    <button>click</button>
    
  </template>
  
  <script>
 
  import getCollection from '../composables/getCollection'

  export default {
      name: 'HomeView',
      
      setup() {

        const { error, documents } = getCollection('booklist')

          return { error, documents }
      },
      
  }
  </script>
  