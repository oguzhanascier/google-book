import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
  },
  getters: {},
  mutations: {
 
  },
  actions: {
    getAPI() {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=english&key=AIzaSyAXj8Lh7xnbblNxlI1m-pIuRq-3mayhb6s"
        )
        .then((response) => {
          response.data.items.map((item) => {
            console.log(item.volumeInfo.title);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
