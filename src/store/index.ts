import { createStore, useStore as useVuexStore } from "vuex";

import { actions } from "./actions";
import { mutations } from "./mutations";
import { State, state } from "./state";

const store = createStore<State>({
  state,
  mutations,
  actions,
});

export const useStore = (): typeof store => useVuexStore();

export default store;
