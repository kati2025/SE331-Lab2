<script setup lang="ts">
import { ref, onMounted } from 'vue'
import UserService from '@/services/UserService'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const posts = ref<any[] | null>(null)

onMounted(() => {
  UserService.getUserPosts(Number(props.id))
    .then((response) => {
      posts.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching posts:', error)
    })
})
</script>

<template>
  <div class="user-posts">
    <div v-for="post in posts" :key="post.id" class="post-card">
      <h3>{{ post.title }}</h3>
      <br>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style scoped>
.user-posts {
  margin-top: 20px;
  text-align: left;
}
.post-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>