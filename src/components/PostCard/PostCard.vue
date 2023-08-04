<template>
  <div class="bg-white">{{ title }}</div>
</template>

<script setup lang="ts">
defineProps<{
  userId: number;
  id: number;
  title: string;
  body: string;
}>();
</script>
