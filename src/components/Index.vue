<template>
    <!--背景-->
    <iframe class="background-iframe" :src="iframeSrc" frameborder="0"></iframe>
    <!--导航-->
    <NavHome/>
    <!--横幅-->
    <Banner />
    <!--站点-->
    <Links />
    <Station />
    <!--底部-->
    <Footer />


    <lay-tooltip position="left-start" content="返回顶部">
        <lay-backtop :bottom="140" circle size="small" bgcolor="#5FB878" iconSize="22" icon="layui-icon-top" ></lay-backtop>
    </lay-tooltip>
    <lay-tooltip position="left-start" content="切换背景">
        <lay-backtop :bottom="100" circle size="small" bgcolor="#5FB878" iconSize="22" :showHeight="0" @click="switchIframeSrc" icon="layui-icon-theme" disabled></lay-backtop>
    </lay-tooltip>
</template>

<script>
import {ref, onMounted} from 'vue';
import WOW from 'wow.js'

import NavHome from "./common/NavHome.vue";
import Banner from "./common/Banner.vue";
import Station from "./common/Station.vue";
import Links from "./common/Links.vue";
import Footer from "./common/Footer.vue";

export default {
    name: 'IndexHome',
    components: {
        NavHome, Banner, Station, Footer, Links
    },
    setup() {
        const urls = ref(['/BackgroundDaytime.html', '/BackgroundCartoon.html', '/BackgroundNight.html', '/BackgroundCode.html']);
        const currentUrlIndex = ref(0); // 当前URL索引
        const iframeSrc = ref(urls.value[currentUrlIndex.value]);

        const switchIframeSrc = () => {
            currentUrlIndex.value = (currentUrlIndex.value + 1) % urls.value.length;
            iframeSrc.value = urls.value[currentUrlIndex.value];
        };

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
        return {
            iframeSrc,
            switchIframeSrc
        };
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
