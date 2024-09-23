<template>
    <!--背景-->
    <iframe class="background-iframe" :src="iframeSrc" frameborder="0"></iframe>
    <!--导航-->
    <NavHome />
    <!--横幅-->
    <Banner />
    <!--站点-->
    <Station />
    <!--一言-->
    <Hitokoto />
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
import {ref} from 'vue';

import NavHome from "@/components/common/NavHome.vue";
import Banner from "@/components/common/Banner.vue";
import Station from "@/components/common/Station.vue";
import Hitokoto from "@/components/common/Hitokoto.vue";
import Footer from "@/components/common/Footer.vue";

export default {
    name: 'IndexHome',
    components: {
        NavHome, Banner, Station, Hitokoto, Footer
    },
    setup() {
        const urls = ref(['/BackgroundDaytime.html', '/BackgroundCartoon.html', '/BackgroundNight.html', '/BackgroundCode.html']);
        const currentUrlIndex = ref(0); // 当前URL索引
        const iframeSrc = ref(urls.value[currentUrlIndex.value]);

        const switchIframeSrc = () => {
            currentUrlIndex.value = (currentUrlIndex.value + 1) % urls.value.length;
            iframeSrc.value = urls.value[currentUrlIndex.value];
        };
        return {
            iframeSrc,
            switchIframeSrc
        };
    }
}
</script>

<style>

</style>
