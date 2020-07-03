<template>
    <div id="news">
        <h1>news信息</h1>
        <div id="currentList">
            <router-link to="/news/nGuoJi">国际NEWS</router-link>
            <router-link to="/news/nGuoNei">国内NEWS</router-link>
            <router-link to="/news/nZuiXin">最新NEWS</router-link>
        </div>
        <!--News组件路由出口-->
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "components"
    }
</script>

<style scoped>
    #currentList{
        display: flex;
        justify-content: space-around;
    }
</style>
