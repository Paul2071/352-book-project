<!-- eslint-disable vue/multi-word-component-names -->
<template>
     <form @submit.prevent="handleSubmit" class="booklist">
        <h4>Add a book</h4>
        
        <input type="text"  required placeholder="Book title..." v-model="booktitle">
        <input type="text" placeholder="Book author..." v-model="bookauthor">
        <input type="text" placeholder="Book Genre..." v-model="bookgenre">
        <input type="numeric" placeholder="Number of pages" v-model="numberofpages">
        <input type="numeric" placeholder="Rating out of 10..." v-model="ratingvalue">
        <input type="boolean" placeholder="Did you finish the book (yes or no)?" v-model="bookfinished">
        <textarea placeholder="100 word or less review" v-model="bookreview"></textarea>

        <label>Upload book jacket</label>
        <input @change="handleChange" type="file">
        
        <div v-if="fileError" class="error"> {{ fileError }}</div>
        
        <button v-if="!isPending">Submit</button>
        <button v-if="isPending" disabled>Loading...</button>
        

        
    </form>
    
  </template>
  
  <script>
 
 import { ref } from "vue";
 import useStorage from '@/composables/useStorage'
 import useCollection from '@/composables/useCollection'
 import getUser from '@/composables/getUser'
 import { timestamp } from '@/firebase/config'
 import { useRouter } from "vue-router";

  export default {
      
      
      setup() {

        const { url, filePath, uploadImage} = useStorage()
        const { error, addDoc } = useCollection('booklist')
        const { user } = getUser()
        const router = useRouter()

        const isPending = ref(false)
        const file = ref(null)
        const fileError = ref(null)

        const booktitle = ref('')
        const bookauthor = ref('')
        const bookgenre = ref('')
        const numberofpages = ref('')
        const ratingvalue = ref('')
        const bookfinished = ref('')
        const bookreview = ref('')

        const handleSubmit = async () => {
            if(file.value) {
                await uploadImage(file.value)
                //console.log('url: ', url.value)
                const res = await addDoc({
                    title : booktitle.value,
                    author : bookauthor.value,
                    genre : bookgenre.value,
                    pages : numberofpages.value,
                    rating: ratingvalue.value,
                    finished : bookfinished.value,
                    review : bookreview.value,
                    userId : user.value.uid,
                    userName : user.value.displayName,
                    coverUrl : url.value,
                    filePath : filePath.value,
                    books: [],
                    createdAt : timestamp()
                }) 
                if (!error.value) {
                   router.push({name: 'booklistdetails', params: { id: res.id } })
                }
            }
        }
        
        // allowed file types
        // selected const is the object given to us by the event of uploading an image - we use files and type from that object here

        const types = ['image/png', 'image/jpeg']


        const handleChange = (e) => {
            const selected = e.target.files[0]
            fileError.value = null
            
            if (selected && types.includes(selected.type)) {
                file.value = selected
              console.log(selected)
            } else 
            {
                file.value = null
                fileError.value = "jpeg or png only please"
            }

        }



          return {booktitle, bookauthor, bookgenre, numberofpages, ratingvalue, bookfinished, bookreview, isPending, error, fileError, handleSubmit, handleChange} ;
      },
      
  }
  </script>

<style>
    input[type="file"] {
        border: 0;
        padding: 0;
    }
    label {
        font-size: 14px;
        font-weight: bold;
        display: block;
        margin-top: 30px
    }
    button {
        margin-top: 20px;
        margin-bottom: 20px
    }
    
</style>