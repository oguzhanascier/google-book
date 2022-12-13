import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search:''
  },
  getters: {
    
  },
  mutations: {
    getAPI() {
      axios('https://www.googleapis.com/books/v1/volumes?q=english&key=AIzaSyAXj8Lh7xnbblNxlI1m-pIuRq-3mayhb6s')
        .then((response) => {
          for (let i = 0; i < response.data.items.length; i++) {
            let item = response.data.items[i];
            console.log(item.volumeInfo.title);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  actions: {
    getAPI({commit}){
      commit('getAPI')
    }
   
  },
  modules: {
  }
})
