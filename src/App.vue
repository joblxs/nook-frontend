<template>
<!--  <iframe class="background-iframe" src="/GlobalBackground.html" frameborder="0"></iframe>-->
    <router-view />
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
* {margin: 0;padding: 0}
.background-iframe {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
}
</style>
