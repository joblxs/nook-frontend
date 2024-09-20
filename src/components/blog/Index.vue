<template>
    <lay-layout class="example">
        <lay-header>
            <Navigation />
        </lay-header>
        <lay-body>
            <lay-layout>
                <lay-body>Content</lay-body>
                <lay-side>Right</lay-side>
            </lay-layout>
        </lay-body>
        <lay-footer>
            <Footer />
        </lay-footer>
    </lay-layout>
</template>

<script>
import Navigation from "@/components/blog/common/Navigation.vue";
import Footer from "@/components/common/Footer.vue";

export default {
    name: 'BlogIndex',
    components: {Footer, Navigation}
}
</script>

<style scoped>

</style>