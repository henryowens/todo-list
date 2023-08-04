<template>
  <p v-if="isError || error">
    There was an error loading the page: {{ error }}
  </p>
  <p v-else-if="loading">Loading</p>
  <div v-else>
    <div class="flex justify-between">
      <h1>Sortable Post List</h1>
    </div>
    <PostCard v-for="(post, i) in data" :key="i" v-bind="post" />
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

const loading = computed(
  () => isLoading.value || isFetching.value || !data.value
);
</script>
