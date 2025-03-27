<template>
   <h2> booklist details - {{ id }}</h2>
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
         <button v-if="ownership" @click="handleDelete">DELETE BOOK</button>
        
        
      </div>
   </div>

</template>

<script>

import { computed } from 'vue';
import getDocument from '../../composables/getDocument';
import getUser from '../../composables/getUser'
import useDocument from '../../composables/useDocument';
import useStorage from '../../composables/useStorage';
import { useRouter } from 'vue-router';


export default {

 props: ['id'],
 setup(props){
   
   const { error, document} = getDocument('booklist', props.id)
   const { user } = getUser()
   const { deleteDoc } = useDocument('booklist', props.id)
   const { deleteImage } = useStorage()
   const router = useRouter()

   const ownership = computed( ()=> { 
      return document.value && user.value && user.value.uid == document.value.userId
   })

   const handleDelete = async () => {
      await deleteImage(document.value.filePath)
      await deleteDoc()
      router.push({name: 'home'})

   }


   return {error, document, user, ownership, handleDelete}
   }
}    

</script>

<style></style>
