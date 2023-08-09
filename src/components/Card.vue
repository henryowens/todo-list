<template>
  <div class="card">
    <div class="card__header">
      <slot name="header" />
    </div>
    <div class="card__body">
      <slot name="body" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.card {
  @apply max-w-lg;
  @apply w-full;
  @apply flex flex-col;
  @apply shadow-md;
  @apply h-fit;
  @apply rounded-md;
  .card__header {
    @apply bg-white;
    @apply p-6;
    @apply rounded-t-md;
  }
  .card__body {
    @apply bg-charcoal-200;
    @apply p-6;
    @apply rounded-b-md;
  }
}
</style>
