<script setup lang="ts">
import type { Student } from '@/types'

defineProps<{
  student: Student
}>()
</script>

<template>
  <div class="p-[20px] w-[250px] cursor-pointer border border-[#39495c] mb-[18px] text-center hover:scale-101 hover:shadow-sp">
    <p>{{ student.name }} {{ student.surname }}</p>
    <p>GPA: {{ student.gpa }}</p>
  </div>
</template>

