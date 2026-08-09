<script setup lang="ts">
import { ref } from 'vue'
import type { Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink class="no-underline text-[#2c3e50]" :to="{ name: 'event-detail-view', params: {id: event.id}}">
    <div class="cursor-pointer border border-[#39495c] p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>
/* p=ระยะห่างขอบ, mb=Margin Bottom ระยะล่างนอกกรอบ */



