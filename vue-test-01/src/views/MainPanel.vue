<template>
    <div id="mainPanel">
        <div class="dashBoard">
            <router-link to="/home">首页</router-link>
            <router-link to="/news">新闻</router-link>
            <router-link to="/yule">娱乐</router-link>
        </div>
        <!--一级路由出口-->
        <router-view />
    </div>

</template>

<script>
    export default {
        name: "mainPanel"
    }
</script>

<style scoped>
    .dashBoard{
        display: flex;;
        justify-content: space-around;
    }
</style>
