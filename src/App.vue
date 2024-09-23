<template>
    <router-view />
</template>

<script>
import WOW from 'wow.js';
export default {
    name: 'App',
    mounted() {
        new WOW({
            boxClass: "wow", // 需要执行动画的元素的class
            animateClass: "animate__animated", // 动画的class
            offset: 0, // 触发动画的滚动偏移量
            mobile: true, // 是否在移动设备上启用
            live: true, // 是否对动态添加的元素进行动画处理
            scrollContainer: null,
            resetAnimation: true,
        }).init();
    }
}

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
