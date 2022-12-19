import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    books: [],
  },
  getters: {},
  mutations: {
    createBooks(state, book) {
      state.books = book;
    },
  },
  actions: {
    getAPI({ commit }) {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=english&key=AIzaSyAXj8Lh7xnbblNxlI1m-pIuRq-3mayhb6s"
        )
        .then((response) => {
      
              let book = response;
              commit("createBooks", book.data.items);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
