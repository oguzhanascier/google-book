<template>
    <div class="details">
        <div class="book" v-for="book in detail" :key="book.title">
            <div class="top">
                <img :src="book.img" width="100%" height="100%" alt="">
                <div class="topText" style="width:300px ;">
                    <h3>{{ book.title }}</h3>
                    <span>{{ book.author }}</span>
                </div>
            </div>
            <div class="text">

                <p class="desc">
                    {{ book.desc }}
                </p>
                <router-link tag="a" to="/">Back</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            detail: []
        }
    },

    computed: {
        ...mapState(['books'])
    },
    created() {
        this.$store.dispatch('getAPI')
        this.books.forEach(book => {
            if (book.id === this.$route.params.id) {
                this.detail.push({
                    title: book.volumeInfo.title,
                    desc: book.volumeInfo.description,
                    author: book.volumeInfo.authors[0],
                    img: book.volumeInfo.imageLinks.thumbnail
                })

                console.log(book.volumeInfo.imageLinks.thumbnail);

            }
        })
    }
}
</script>

<style lang="scss" scoped>
.details {
    display: flex;
    justify-content: center;
  
}

.desc {
    width: 600px;
    padding: 30px;
    color: #1D192B;


}


a {
    position: absolute;
    top: -30px;
    right: 40px;
    display: inline-flex;
    justify-content: center;
    text-decoration: none;
    background: #6750A4;
    color: white;
    padding: 10px;
    width: 100px;
    border-radius: 5px;

    &:hover {
        background: #7657cd;


    }



}

.top {
    display: flex;
}

.text {
    position: relative;

    display: flex;


}

.topText{
  margin: 20px;
 }


img {
    margin-top: 30px;
    margin-left: 25px ;
    width: 300px;
    height: 300px;
    border-radius: 30px;
}
</style>