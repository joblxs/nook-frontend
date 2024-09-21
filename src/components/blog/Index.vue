<template>
    <!--导航-->
    <Navigation/>
    <!--列表-->
    <div class="container-fixed">
        <BlogList />
    </div>
    <!--底部-->
    <Footer/>
</template>

<script>
import Navigation from "@/components/blog/common/Navigation.vue";
import BlogList from "@/components/blog/common/BlogList.vue";
import Footer from "@/components/common/Footer.vue";

export default {
    name: 'BlogIndex',
    components: {Footer, Navigation, BlogList}
}
</script>

<style>
.container-fixed {
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

@media screen and (max-width: 1366px) {
    .container-fixed {
        width: 90%
    }
}

@media screen and (max-width: 1024px) {
    .container-fixed {
        width: 90%
    }
}
</style>