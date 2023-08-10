import { MutationTree } from "vuex";
import { ActionHistory, PostWithName, State } from "./state";

export enum MutationType {
  ADD_POST = "ADD_POST",
  UPDATE_POSTS = "UPDATE_POSTS",

  ADD_ACTION_HISTORY = "ADD_ACTION_HISTORY",
  UPDATE_ACTION_HISTORY = "UPDATE_ACTION_HISTORY",
}

export type Mutations = {
  [MutationType.ADD_POST](state: State, post: PostWithName): void;
  [MutationType.UPDATE_POSTS](state: State, posts: PostWithName[]): void;
  [MutationType.ADD_ACTION_HISTORY](state: State, action: ActionHistory): void;
  [MutationType.UPDATE_ACTION_HISTORY](
    state: State,
    action: ActionHistory[]
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.ADD_POST]: (state, post) => state.posts.unshift(post),
  [MutationType.UPDATE_POSTS]: (state, posts) => (state.posts = posts),
  [MutationType.ADD_ACTION_HISTORY]: (state, action) =>
    state.actionHistory.unshift(action),
  [MutationType.UPDATE_ACTION_HISTORY]: (state, actionHistory) =>
    (state.actionHistory = actionHistory),
};
