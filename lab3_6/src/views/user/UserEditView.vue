<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message.ts'

const router = useRouter()
const store = useMessageStore()

const updateUserDetails = () => {
    store.updateMessage('the update is in progress')
    
    setTimeout(() => {
        store.resetMessage()
    }, 5000)
    
    router.push({ path: '/' })
}
</script>

<template>
   <div>
       <h2>Edit User Details</h2>
       <button @click="updateUserDetails">Edit</button>
   </div>
</template>