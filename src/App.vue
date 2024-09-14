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
body {color: #fff !important}
.background-iframe {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
