<script setup lang="ts">
defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div v-if="user" class="user-profile">
    <p><strong>Address:</strong> {{ user.address?.suite }} {{ user.address?.street }}, {{ user.address?.city }}</p>
    <p><strong>Phone:</strong> {{ user.phone }}</p>
  </div>
</template>

<style scoped>
.user-profile {
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
}
</style>