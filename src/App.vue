<template>
  <div class="app__container">
    <p v-if="error">There was an error loading the page: {{ error }}</p>
    <p v-else-if="loading || !posts">Loading</p>
    <div v-else class="page__content">
      <div class="page__left">
        <div class="page__heading">
          <h1 class="page__title">Sortable Post List</h1>
        </div>
        <div class="post__cards__container">
          <PostCard
            v-for="(post, i) in posts"
            :key="i"
            :name="post.name"
            :can-move-up="i !== 0"
            :can-move-down="i + 1 !== posts.length"
            @up="() => onUp(i)"
            @down="() => onDown(i)"
          />
        </div>
      </div>
      <Card class="page__right">
        <template v-slot:header>
          <h1 class="page__title">List of actions commited</h1>
        </template>
        <template v-slot:body>
          <div class="list__item__container">
            <p v-if="!actions.length" class="empty__list__message">
              There are no actions.
            </p>
            <div
              v-else
              v-for="(action, i) in actions"
              :key="i"
              class="list__item"
            >
              <p>
                Moved {{ action.post.name?.toLocaleLowerCase() }} from
                {{ action.from + 1 }} to
                {{ action.to + 1 }}
              </p>
              <Button>Time Travel</Button>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import { Button, Card, PostCard } from "@/components";
import postsApiService from "@/api/posts/service";
import { Post } from "./api/posts/models";

interface PostWithName extends Post {
  name: string;
}
const posts = ref<PostWithName[]>([]);
const loading = ref(false);
const error = ref<unknown>();

onMounted(async () => {
  try {
    loading.value = true;
    const result = await postsApiService.get();
    if (result)
      posts.value = result.map((post, index) => ({
        ...post,
        name: `Card ${index + 1}`,
      }));
  } catch (err) {
    error.value = err;
  }
  loading.value = false;
});

interface Action {
  from: number;
  to: number;
  post: PostWithName;
  currentState: PostWithName[];
}

const actions = ref<Action[]>([]);

function swapElements<T>(array: Array<T>, from: number, to: number) {
  [array[from], array[to]] = [array[to], array[from]];
}

const addAction = (from: number, to: number) => {
  const post = posts.value[from];
  swapElements(posts.value, from, to);
  actions.value.unshift({ to, from, post, currentState: posts.value });
};

const onUp = (from: number) => addAction(from, from - 1);
const onDown = (from: number) => addAction(from, from + 1);
</script>

<style lang="scss" scoped>
.app__container {
  @apply max-w-7xl;
  @apply px-8 py-6;
  @apply m-auto;
  .page__content {
    @apply flex;
    @apply justify-between;
    @apply gap-8;
    .page__left {
      @apply max-w-md w-full;
      .page__heading {
        @apply flex justify-between;
        @apply mb-6;
        .page__title {
          @apply text-xl;
        }
      }
      .post__cards__container {
        @apply flex flex-col;
        @apply gap-6;
        @apply overflow-y-auto;
        @apply rounded-md;
        @apply transition;
      }
    }
    .page__right {
      .list__item__container {
        @apply rounded-md;
        @apply gap-0.5;
        @apply flex flex-col;

        .list__item {
          @apply first:rounded-t-md;
          @apply last:rounded-b-md;
          @apply p-4;
          @apply bg-white;
          @apply flex;
          @apply justify-between;
          @apply items-center;
          @apply text-charcoal-600;
          @apply text-sm;
        }
        .empty__list__message {
          @apply text-charcoal-300;
          @apply text-center;
          @apply text-sm;
        }
      }
    }
  }
}
</style>
>
