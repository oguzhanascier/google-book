<template>
    <div class="container">
        <div class="card">
            <div class="image">
                <img src="https://books.google.com/books/content?id=ZqO7wRZjZQQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" alt="">
            </div>
            <h4>Header</h4>
            <a href="">More Read</a>
        </div>

    </div>
</template>

<script>
export default {

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

    display: flex;
    flex-direction: column;
    text-align: center;
    width: 16%;
    height: 250px;
    padding-bottom: 30px;
    background: #F3EDF7;
    border-radius: 20px;
    overflow: hidden;
    color: #1D192B;
    filter: drop-shadow(2px 2px 14px #A8ABA9);

    img {
        width: 100%;
        height: 200px;
    }

    h4 {
        font-size: 24px;
        margin: 0;
        padding: 10px;
    }

    a {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        bottom: -91px;

        margin-top: 10px;
        transform: translate(-48%);
        text-decoration: none;
        color: #E8DEF8;
        font-size: 18px;
        transition: all .7s ease-in-out;
        background: #6750A4;
        width: 120%;
        height: 80px;


    }

    &:hover a {
        bottom: 0;
    }
}
</style>