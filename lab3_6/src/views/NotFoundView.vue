<script setup lang="ts">
import { RouterLink } from 'vue-router'

withDefaults(
  defineProps<{
    resource?: string
  }>(),
  {
    resource: 'page'
  }
)
</script>

<template>
  <div class="not-found">
    <h1>Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
    
    <RouterLink :to="{ name: 'home' }" class="back-link">
      Back to the home page
    </RouterLink>
  </div>
</template>

