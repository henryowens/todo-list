<template>
  <div class="max-w-7xl m-auto px-8 py-6">
    <p v-if="isError || error">
      There was an error loading the page: {{ error }}
    </p>
    <p v-else-if="loading || !data">Loading</p>
    <div v-else>
      <div class="flex justify-between mb-6">
        <h1 class="text-xl">Sortable Post List</h1>
      </div>
      <div class="flex">
        <div
          class="flex flex-col gap-8 overflow-y-auto rounded-lg max-w-md w-full"
        >
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
