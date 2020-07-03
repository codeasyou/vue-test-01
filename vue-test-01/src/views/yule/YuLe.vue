<template>
    <div id="yule">
        <h1>yule信息</h1>
        <div id="currentList">
            <router-link to="/yule/YGuoJi">国际YULE</router-link>
            <router-link to="/yule/YGuoNei">国内YULE</router-link>
            <router-link to="/yule/YZuiXin">最新YULE</router-link>
        </div>
        <!--Yule组件路由出口-->
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "yule"
    }
</script>

<style scoped>
    #currentList{
        display: flex;
        justify-content: space-around;
    }
</style>
