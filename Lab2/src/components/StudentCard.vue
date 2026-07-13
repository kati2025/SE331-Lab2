<script setup lang="ts">
import type { Student } from '@/types'

defineProps<{
  student: Student
}>()
</script>

<template>
  <div class="student-card">
    <p>{{ student.name }} {{ student.surname }}</p>
    <p>GPA: {{ student.gpa }}</p>
  </div>
</template>

<style scoped>
.student-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: center;
}
.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>