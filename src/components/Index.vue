<template>
    <!--背景-->
    <iframe class="background-iframe" src="/BackgroundCartoon.html" frameborder="0"></iframe>
    <!--导航-->
    <NavHome/>
    <!--横幅-->
    <Banner/>
    <!--站点-->
    <Station/>
    <lay-backtop :bottom="100" bgcolor="#5FB878" icon="layui-icon-up" circle></lay-backtop>
</template>

<script>
import {onMounted} from 'vue';
import WOW from 'wow.js'

import NavHome from "./common/NavHome.vue";
import Banner from "./common/Banner.vue";
import Station from "./common/Station.vue";

export default {
    name: 'IndexHome',
    components: {
        NavHome, Banner, Station
    },
    setup() {
        onMounted(() => {
            new WOW({
                boxClass: "wow", // 需要执行动画的元素的class
                animateClass: "animate__animated", // 动画的class
                offset: 0, // 触发动画的滚动偏移量
                mobile: true, // 是否在移动设备上启用
                live: true, // 是否对动态添加的元素进行动画处理
                scrollContainer: null,
                resetAnimation: true,
            }).init();
        });
    }
}
</script>

<style>
body {
    color: #FFF !important;
    font-family:"Microsoft YaHei"
}

@font-face {
    font-family: 'BarbaraHand';
    src: url('../assets/fonts/barbarahand-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
</style>
