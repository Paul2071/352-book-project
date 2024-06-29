import { ref } from "vue";
import { projectFirestore } from "../firebase/config";


const useDocument = (collection, id) => {
const error = ref(null)
const isPending = ref(false)

let docRef = projectFirestore.collection(collection).doc(id)

const deleteDoc = async () => {
    isPending.value = true
    error.value = null
    const response = await docRef.delete()

    return response

    try {

    } catch(err) {

    }
    
}

    return {error, isPending}
}

export default useDocument