<template>
    <div id="app" class="container">
        <Head></Head>
        <Menu></Menu>
        <router-view></router-view>
        <Footer></Footer>
        <!-- <Head></Head> -->
    </div>
</template>

<script>
import Head from "./components/Head.vue";
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: "App",
    components: {
        Head,
        Footer,
        Menu,
        // HelloWorld
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

.my-border {
    /* border: 1px dashed black; */
    /* padding: 0 10px; */
    background-color: #D1E0F8;
    max-width: 1400px;
    border: 2px solid rgb(35, 35, 35);
}

.container {
    margin: 20px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 20px;
}
</style>
