<template>
  <div class="post__card">
    <h1 class="post__name">Card {{ id }}</h1>
    <div class="post__navigation">
      <FontAwesomeIcon
        v-if="canMoveUp"
        :class="!canMoveDown ? 'my-auto' : ''"
        icon="fa-solid fa-angle-up"
        @click="onUp"
      />
      <FontAwesomeIcon
        v-if="canMoveDown"
        :class="!canMoveUp ? 'my-auto' : ''"
        icon="fa-solid fa-angle-down"
        @click="onDown"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  userId: number;
  id: number;
  title: string;
  body: string;
  canMoveUp?: boolean;
  canMoveDown?: boolean;
}>();

const emit = defineEmits<{
  (e: "up", id: number): void;
  (e: "down", id: number): void;
}>();

const onUp = () => emit("up", props.id);
const onDown = () => emit("down", props.id);
</script>

<style lang="scss" scoped>
.post__card {
  @apply bg-white;
  @apply w-full;
  @apply px-4 py-4;
  @apply rounded-md;
  @apply flex;
  @apply justify-between;
  @apply shadow-md;
  .post__name {
    @apply py-5;
  }
  .post__navigation {
    @apply flex flex-col;
    @apply justify-between;
    @apply text-primary-400;
  }
}
</style>
