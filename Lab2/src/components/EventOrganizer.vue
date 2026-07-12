<script setup lang="ts">
import type { Event } from '@/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="organizer-card">
    <p>{{ event.category }}</p>
    <p>{{ event.organizer }}</p>
  </div>
</template>

<style scoped>
.organizer-card {
  text-align: right; 
  padding: 20px;
  width: 250px;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.organizer-card p {
  font-size: 16px; 
  margin: 5px 0;
}
</style>