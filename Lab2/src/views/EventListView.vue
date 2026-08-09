<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventOrganizer from '@/components/EventOrganizer.vue'
import type { Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue' 
import EventService from '@/services/EventService'

import { useRouter } from 'vue-router'

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)

const router = useRouter()

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  limit: {
    type: Number,
    required: true
  }
})

const page = computed(() => props.page)
const limit = computed(() => props.limit)

onMounted (() => {
  watchEffect(() => {
    EventService.getEvents(3, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch(() => {
        router.push({ name: 'network-error-view' })
      })
  })
})

const hasNextPage = computed(() => {
    const totalPages = Math.ceil(totalEvents.value / 3)
    return page.value < totalPages
})
</script>

<template>
  <h1>Events For Good</h1>

  <div class="page-size-selector">
      <span>Events per page: </span>
      <RouterLink :to="{ name: 'event-list-view', query: { page: 1, limit: 1 } }">1</RouterLink> |
      <RouterLink :to="{ name: 'event-list-view', query: { page: 1, limit: 2 } }">2</RouterLink> |
      <RouterLink :to="{ name: 'event-list-view', query: { page: 1, limit: 3 } }">3</RouterLink> |
      <RouterLink :to="{ name: 'event-list-view', query: { page: 1, limit: 4 } }">4</RouterLink> |
      <RouterLink :to="{ name: 'event-list-view', query: { page: 1, limit: 5 } }">5</RouterLink> |
      <RouterLink :to="{ name: 'event-list-view', query: { page: 1, limit: 6 } }">6</RouterLink>
    </div>

  <div class="flex flex-col items-center">
    <div v-for="event in events" :key="event.id" class="event-wrapper">
      <EventCard :event="event" />
      <EventOrganizer :event="event" />
    </div>

    <div class="flex w-[290px]">
      <RouterLink
        class="flex-1 no-underline text-[#2c3e50] text-left"
        :to="{ name: 'event-list-view', query: { page: page - 1, limit: limit } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Prev Page</RouterLink
      >

  <RouterLink 
    class="flex-1 no-underline text-[#2c3e50] text-right"
    :to="{ name: 'event-list-view', query: { page: page + 1, limit: limit } }"
    rel="next"
    v-if="hasNextPage"
    >Next Page &#62;</RouterLink
    >
    </div>
  </div>
</template>

