<!-- eslint-disable vue/multi-word-component-names -->
<template>
     <form  class="booklist">
        <h4>Add a book</h4>
        
        <input type="text"  required placeholder="Book title..." v-model="booktitle">
        <input type="text" placeholder="Book author..." v-model="bookauthor">
        <input type="text" placeholder="Book Genre..." v-model="bookgenre">
        <input type="numeric" placeholder="Number of pages" v-model="pagenumber">
        <input type="numeric" placeholder="Rating out of 10..." v-model="ratingvalue">
        <input type="boolean" placeholder="Did you finish...?" v-model="bookfinished">
        <div v-if="error" class="error"> {{ error }}</div>
        
        <button v-if="!isPending">Submit</button>
        <button v-if="isPending" disabled>Loading...</button>

        
    </form>
    
  </template>
  
  <script>
 
  export default {
      name: 'createbooklist',
      
      setup() {
         
          return ;
      },
      
  }
  </script>

