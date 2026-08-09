<script setup lang="ts">
import type { Event } from '@/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="text-right p-[20px] w-[250px] border border-[#39495c] mb-[18px]">
    <p class="text-[16px] my-[5px]">{{ event.category}}</p>
    <p class="text-[16px] my-[5px]">{{ event.organizer}}</p>
  </div>
</template>
