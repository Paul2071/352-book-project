import { ref } from 'vue';
import { projectAuth } from '../firebase/config'

//this is the ref that will have data on current user, stored in user variable
const user = ref(projectAuth.currentUser)


projectAuth.onAuthStateChanged(_user => {
    console.log('User state change, current user is: ', _user)
    user.value = _user
});

const getUser = () => {
    return { user }
}

export default getUser