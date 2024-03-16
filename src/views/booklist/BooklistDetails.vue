<template>
   <h2> booklsit details - {{ id }}</h2>
   <div v-if="error" class="error"> {{ error }}</div>
   <div v-if="document" class="book-details"></div>

   <!-- book list info-->

   <div class="booklist-info">
      <div class="cover">
         <img :src="document.coverUrl" alt = "bookjacket">
         <h2>Title: {{ document.title }}</h2>
         <h2>Author: {{ document.author }}</h2>
         <h2>Rating: {{ document.rating }}</h2>
         <h2>Finished: {{ document.finished }}</h2>
         <h2>Review: {{ document.review }}</h2>
         <h2>Created by "{{ document.userName }}"</h2>
        
        
      </div>
   </div>

</template>

<script>
import getDocument from '../../composables/getDocument';


export default {

 props: ['id'],
 setup(props){
   
   const { error, document} = getDocument('booklist', props.id)

   return {error, document}
   }
}    

</script>

<style></style>
