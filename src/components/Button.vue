<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  @apply bg-secondary-500;
  @apply text-secondary-900;
  @apply px-4 py-2;
  @apply rounded-md;
  @apply text-xs;
  @apply transition;
  &:hover {
    @apply bg-secondary-700;
  }
}
</style>
