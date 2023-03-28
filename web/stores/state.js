import { defineStore } from "pinia";

export const usePageChange = defineStore("pageChange", {
  state: () => ({
    currentPage: "", // index / work-slug
    lastPage: "", // index / work-slug
    currentSlug: "", // '' / a-slug-for-a-work-page
  }),
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
  actions: {
    updatePage(val) {
      this.currentPage = val;
    },
    updateLastPage(val) {
      this.currentPage = val;
    },
    updateSlug(val) {
      this.currentPage = val;
    },
  },
});

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, name: "Eduardo" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
