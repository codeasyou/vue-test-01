<template>
    <div id="home">
        <h1>home信息</h1>
        <div id="currentList">
            <router-link to="/home/hGuoJi">国际HOME</router-link>
            <router-link to="/home/hGuoNei">国内HOME</router-link>
            <router-link to="/home/hZuiXin">最新HOME</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    #currentList{
        display: flex;
        justify-content: space-around;
    }
</style>
