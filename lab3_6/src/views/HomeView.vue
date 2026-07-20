<script setup lang="ts">
import { ref, onMounted } from 'vue'
import UserService from '@/services/UserService'
import UserCard from '@/components/UserCard.vue'

const users = ref<any[] | null>(null)

onMounted(() => {
  UserService.getUsers()
    .then((response) => {
      users.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching users:', error)
    })
})
</script>

<template>
  <div class="home">
    <h1>Users List</h1>
    
    <div class="user-list">
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.user-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>