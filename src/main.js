import './assets/main.css'

import { createApp } from 'vue'
import { projectAuth } from './firebase/config'
//import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')

let app

projectAuth.onAuthStateChanged( ()=> {
    if(!app) {
        app =  createApp(App).use(router).mount('#app')
    }
})

