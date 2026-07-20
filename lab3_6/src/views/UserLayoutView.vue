<script setup lang="ts">
import { ref, onMounted } from 'vue'
import UserService from '@/services/UserService'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const user = ref<any | null>(null)

onMounted(() => {
  UserService.getUser(Number(props.id))
    .then((response) => {
      user.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching user:', error)
    })
})
</script>

<template>
  <div v-if="user" class="user-layout">
    <h1>{{ user.name }}</h1>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Website:</strong> {{ user.website }}</p>
    

  </div>
</template>

<style scoped>
.user-layout {
  text-align: center;
  padding: 20px;
}
</style>