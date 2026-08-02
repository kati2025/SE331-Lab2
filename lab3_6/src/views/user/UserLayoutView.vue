<script setup lang="ts">
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'

const store = useEventStore()
const { event } = storeToRefs(store)
</script>

<template>
  <div v-if="event">
    <h1>{{ event.name }}</h1>
    <p>{{ event.email }}</p>

    <nav class="nav-links">
      <RouterLink :to="{ name: 'user-profile' }">Profile</RouterLink> |
      <RouterLink :to="{ name: 'user-posts' }">Posts</RouterLink> |
      <RouterLink :to="{ name: 'user-edit' }">Edit</RouterLink>
    </nav>

    <RouterView :user="event" />
  </div>
</template>

<style scoped>
.nav-links {
  margin-bottom: 20px;
}
.nav-links a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
}
.nav-links a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}
</style>