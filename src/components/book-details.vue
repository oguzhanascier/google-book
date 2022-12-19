<template>
    <div class="details">
        <div>
            <!-- <img src="" width="100%"
                height="100%" alt=""> -->
            <div class="text" v-for="book in detail" :key="book.title">
                <h3>{{book.title}}</h3>
                <span>{{book.author}}</span>
                <p class="desc" >
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
            detail:[]
        }
    },
   
    computed: {
        ...mapState(['books'])
    },
    created() {
        this.$store.dispatch('getAPI')
        this.books.forEach(book => {
            if(book.id === this.$route.params.id){
                this.detail.push({
                    title:book.volumeInfo.title,
                    desc:book.volumeInfo.description,
                    author:book.volumeInfo.authors[0]
                })
                
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.details {
    display: flex;
    justify-content: center;
    width: 100vw;
}

.desc {
    width: 600px;
    padding: 30px;
    color: #1D192B;


}

a {
    position: absolute;
    top: 30px;
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

.text {
    position: relative;

    display: flex;
    flex-direction: column-reverse;


}


img {
    margin-top: 30px;
    width: 300px;
    border-radius: 30px;
}
</style>