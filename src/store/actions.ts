import { ActionContext, ActionTree } from "vuex";
import { MutationType, Mutations } from "./mutations";
import { State } from "./state";
import postsApiService from "@/api/posts/service";

export interface SwapPostsPayload {
  from: number;
  to: number;
}

export enum ActionTypes {
  GET_INITIAL_POSTS = "GET_INITIAL_POSTS",
  SWAP_POSTS = "SWAP_POSTS",
  TIME_TRAVEL = "TIME_TRAVEL",
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

type Actions = {
  [ActionTypes.GET_INITIAL_POSTS](context: ActionAugments): void;
  [ActionTypes.SWAP_POSTS](
    context: ActionAugments,
    payload: SwapPostsPayload
  ): void;
  [ActionTypes.TIME_TRAVEL](context: ActionAugments, index: number): void;
};

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_INITIAL_POSTS]: async ({ commit }) => {
    try {
      const result = await postsApiService.get();
      if (result) {
        commit(
          MutationType.UPDATE_POSTS,
          result.map((post, index) => ({
            ...post,
            name: `Card ${index + 1}`,
          }))
        );
        return Promise.resolve();
      }
    } catch (error) {
      console.log("Error fetching posts", error);
    }
    return Promise.reject();
  },
  [ActionTypes.SWAP_POSTS]: ({ commit, state }, { from, to }) => {
    const postsCopy = [...state.posts];
    const movedPost = postsCopy.splice(from, 1)[0];
    postsCopy.splice(to, 0, movedPost);
    commit(MutationType.ADD_ACTION_HISTORY, { from, to, state: state.posts });
    commit(MutationType.UPDATE_POSTS, postsCopy);
  },
  [ActionTypes.TIME_TRAVEL]: ({ commit, state }, index) => {
    commit(MutationType.UPDATE_POSTS, state.actionHistory[index].state || []);
    commit(
      MutationType.UPDATE_ACTION_HISTORY,
      state.actionHistory.slice(index + 1)
    );
  },
};
