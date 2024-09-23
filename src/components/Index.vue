<template>
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
</template>

<script>
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
    mounted() {
        document.title = '主页';
        document.querySelector('meta[name="keywords"]').setAttribute('content', '主页，个人网站，好看的个人主页');
        document.querySelector('meta[name="description"]').setAttribute('content', '个人主页搭建');
    }
}
</script>

<style>

</style>
