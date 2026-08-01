<script setup lang="ts">
import { ref, onMounted } from 'vue'
import UserService from '@/services/UserService'
import { RouterLink, RouterView, useRouter } from 'vue-router'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const user = ref<any | null>(null)

const router = useRouter()

onMounted(() => {
  UserService.getUser(Number(props.id))
    .then((response) => {
      user.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching user:', error)
      router.push({ name: '404-resource', params: { resource: 'user' } })
    })
})
</script>

<template>
  <div v-if="user" class="user-layout">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>

    <nav class="nav-links">
      <RouterLink :to="{ name: 'user-profile' }">Profile</RouterLink> |
      <RouterLink :to="{ name: 'user-posts' }">Posts</RouterLink>
    </nav>

    <RouterView :user="user" :id="id" />
  </div>
</template>

<style scoped>
.user-layout {
  text-align: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
.nav-links {
  margin: 20px 0;
  font-weight: bold;
}
.nav-links a {
  color: #2c3e50;
  text-decoration: none;
  padding: 0 10px;
}
.nav-links a.router-link-exact-active {
  color: #42b983;
}
</style>