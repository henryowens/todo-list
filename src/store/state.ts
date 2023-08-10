import { Post } from "@/api/posts/models";

export interface PostWithName extends Post {
  name: string;
}

export interface ActionHistory {
  from: number;
  to: number;
  state: PostWithName[];
}

export interface State {
  posts: PostWithName[];
  actionHistory: ActionHistory[];
}

export const state: State = {
  posts: [],
  actionHistory: [],
};
