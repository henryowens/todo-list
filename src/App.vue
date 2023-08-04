<template>
  <div class="app__container">
    <p v-if="isError || error">
      There was an error loading the page: {{ error }}
    </p>
    <p v-else-if="loading || !data">Loading</p>
    <div v-else>
      <div class="page__container">
        <h1 class="page__title">Sortable Post List</h1>
      </div>
      <div class="page__content">
        <div class="post__cards__container">
          <PostCard
            v-for="(post, i) in data"
            :key="i"
            v-bind="post"
            :can-move-up="i !== 0"
            :can-move-down="i + 1 !== data.length"
            @up="onUp"
            @down="onDown"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";

import { PostCard } from "@/components";
import postsApiService from "@/api/posts/service";

const { isLoading, isFetching, isError, data, error } = useQuery({
  queryKey: ["query"],
  queryFn: postsApiService.get,
});

const onUp = () => {
  console.log("onUp");
};

const onDown = () => {
  console.log("onDown");
};

const loading = computed(() => isLoading.value || isFetching.value);
</script>

<style lang="scss" scoped>
.app__container {
  @apply max-w-7xl;
  @apply px-8 py-6;
  @apply m-auto;
  .page__container {
    @apply flex justify-between;
    @apply mb-6;
    .page__title {
      @apply text-xl;
    }
    .page__content {
      @apply flex;
      .post__cards__container {
        @apply flex flex-col;
        @apply gap-8;
        @apply overflow-y-auto;
        @apply rounded-lg;
        @apply max-w-md w-full;
      }
    }
  }
}
</style>
>
