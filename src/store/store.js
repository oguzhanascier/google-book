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
    getAPI(){
      axios('https://www.googleapis.com/books/v1/volumes?q=2022&key=AIzaSyAXj8Lh7xnbblNxlI1m-pIuRq-3mayhb6s').then((res)=>{
        console.log(res);
      })
    }
  },
  actions: {
   
  },
  modules: {
  }
})
