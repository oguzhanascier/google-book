<template>
    <div class="container">
        <div class="card" v-for="book in books" :key="book.title">
            <div class="image">
                <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="">
            </div>
            <h4>{{book.volumeInfo.title}}</h4>
           <router-link tag="a" :to="`/details/${book.id}`">More Details</router-link>
         
        </div>
        
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data(){
        return{
           
        }
    },

    computed: {
        ...mapState(['books'])

    },
    created() {
        this.$store.dispatch('getAPI')
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: center;
}

.card {
    margin-top: 50px;
    margin: 50px;
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    text-align: center;
    width: 16%;
    height: 350px;
    padding-bottom: 30px;
    background: #F3EDF7;
    border-radius: 20px;
    color: #1D192B;
    filter: drop-shadow(2px 2px 14px #A8ABA9);

    img {
        width: 100%;
        height: 250px;
    }

    h4 {
        font-size: 18px;
        margin-top: 10px;
        padding: 10px;
    }

    a {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 48%;
        bottom: -91px;
        padding: 10px;
        margin-top: 10px;
        transform: translate(-48%);
        text-decoration: none;
        color: #E8DEF8;
        font-size: 18px;
        transition: all .7s ease-in-out;
        background: #6750A4;
        width: 92%;
        height: 90px;


    }

    &:hover a {
        bottom: 25px;
    }
}
</style>