<template>
    <div class="user-booklists">
        <h2>My Playlists</h2>
    </div>
</template>

<script>

import getCollection from "@/composables/getCollection"
import getUser from "@/composables/getUser"

export default {
    setup() {
        const { user } = getUser()
        const { documents } = getCollection(
            'booklist',
        ['userId', '==', user.value.uid]
    )

    console.log(documents)    
    return { documents }
        }
    }
    

</script>

<style>

</style>