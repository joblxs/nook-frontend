<template>
    <router-view />
</template>

<script>

const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
    constructor(callback) {
        callback = debounce(callback, 200);
        super(callback);
    }
};

export default {
    name: 'App'
};
</script>

<style>
* {margin: 0;padding: 0}
body {
    color: #FFF !important;
    font-family:"Microsoft YaHei"
}
@font-face {
    font-family: 'BarbaraHand';
    src: url('@/assets/fonts/barbarahand-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
.background-iframe {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
}
</style>
