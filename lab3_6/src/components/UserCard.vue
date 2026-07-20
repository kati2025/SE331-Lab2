<script setup lang="ts">
defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="user-card">
    <h2>{{ user.name }}</h2>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Company:</strong> {{ user.company?.name }}</p>
  </div>
</template>

<style scoped>
.user-card {
  padding: 20px;
  width: 350px;
  border: 1px solid #39495c;
  margin-bottom: 20px;
  text-align: center;
  cursor: pointer;
}
.user-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>