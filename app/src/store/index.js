import { createStore } from "vuex";
import { VuexPersistence } from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: localStorage,
});

export default createStore({
  state: {
    count: 0,
    memos: [],
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getMemos(state) {
      return state.memos;
    },
    getMemoById: (state) => (id) => {
      return state.memos.find((memo) => memo.id === id);
    },
  },
  mutations: {
    RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION,
    save(state, newMemo) {
      if (newMemo.id) {
        let oldMemo = state.memos.find((memo) => memo.id === newMemo.id);
        oldMemo.title = newMemo.title;
        oldMemo.content = newMemo.content;
      } else {
        newMemo.id = ++state.count;
        state.memos.push(newMemo);
      }
    },
    delete(state, id) {
      state.memos = state.memos.filter((memo) => memo.id !== id);
    },
  },
  actions: {
    // 非同期通信
  },
  modules: {
    // stateをいくつか定義してまとめてモジュールとする
  },
  plugins: [vuexLocal.plugin],
  strict: process.env.NODE_ENV !== "production",
});
