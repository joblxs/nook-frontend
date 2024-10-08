<template>
    <!--导航-->
    <Navigation/>
    <!--列表-->
    <div class="container-fixed" style="margin-top: 60px">
        <div class="col-content">
            <BlogList/>
        </div>
        <div class="col-other">
            <InfoCard />
            <HotBlog />
        </div>
        <div style="clear: both"></div>
    </div>
    <!--底部-->
    <Footer/>
</template>

<script>
import Navigation from "@/components/blog/common/Navigation.vue";
import BlogList from "@/components/blog/common/BlogList.vue";
import HotBlog from "@/components/blog/common/HotBlog.vue";
import InfoCard from "@/components/blog/common/InfoCard.vue";
import Footer from "@/components/common/Footer.vue";

export default {
    name: 'BlogIndex',
    components: {Footer, Navigation, BlogList, HotBlog, InfoCard}
}
</script>

<style>
.header-fixed, .container-fixed {
    max-width: 1200px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

.col-content {
    float: left;
    width: calc(100% - 300px - 20px)
}

.col-other {
    float: right;
    width: 300px
}

@media screen and (max-width: 1366px) {
    .header-fixed, .container-fixed {
        width: 90%
    }
}

@media screen and (max-width: 1024px) {
    .col-content, .col-other {
        width: 100%;
        float: none
    }

    .header-fixed, .container-fixed {
        width: 90%
    }
}

@media screen and (max-width: 500px) {
    .col-content, .col-other {
        padding: 0 0
    }
}
</style>