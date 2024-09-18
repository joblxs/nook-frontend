<template>
    <!--背景图-->
    <iframe class="background-iframe" src="/GlobalBackground.html" frameborder="0"></iframe>
    <!--导航-->
    <NavHome />
    <!--banner 横幅-->
    <Banner />
</template>

<script>
import {onMounted} from 'vue';
import WOW from 'wow.js'

import NavHome from "./common/NavHome.vue";
import Banner from "./common/Banner.vue";

export default {
    name: 'IndexHome',
    components: {
        NavHome, Banner
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

</style>
