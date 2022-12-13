<template>
  <div id="app">
    <header>
      <input type="text" placeholder="Search Book" v-model="search">
      <button @click="getAPI"><i class="fa-solid fa-magnifying-glass"></i></button>
    </header>
    <main>
      <bookCards></bookCards>
    </main>
  </div>
</template>

<script>
import bookCards from './components/book-cards.vue';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions(["getAPI"]),

  },

  components: {
    bookCards
  },
  computed: {


  }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kotta+One&family=Orbitron:wght@400;500&display=swap');

body {
  width: 100wv;
  background: #EADDFF;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  justify-content: center;
  place-items: center;
  height: 50px;
  background: #6750A4;

  input {
    width: 30%;
    background: #EADDFF;
    padding-left: 10px;
    height: 25px;
    border: none;

    border: {
      radius: 5px 0px 0px 5px
    }

    font-family: 'Kotta One',
    serif;
    outline: none;
  }

  button {
    height: 27px;
    padding: 0px 15px;
    background: #FFD8E4;
    border: none;
    cursor: pointer;
    color: #21005D;

    border: {
      radius: 0px 5px 5px 0px
    }
  }
}
</style>
