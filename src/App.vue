<template>
    <lay-config-provider :theme="theme">
        <!--背景-->
        <iframe class="background-iframe" :src="iframeSrc" frameborder="0"></iframe>
        <router-view />

        <lay-tooltip position="left-start" content="返回顶部">
            <lay-backtop :bottom="140" circle size="small" bgcolor="#5FB878" iconSize="22" icon="layui-icon-top" ></lay-backtop>
        </lay-tooltip>
        <lay-tooltip position="left-start" content="切换背景">
            <lay-backtop :bottom="100" circle size="small" bgcolor="#5FB878" iconSize="22" :showHeight="0" @click="switchIframeSrc" icon="layui-icon-theme" disabled></lay-backtop>
        </lay-tooltip>
    </lay-config-provider>
</template>

<script>
import {ref} from 'vue';
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
    },
    setup() {
        const urls = ref(['/BackgroundDaytime.html', '/BackgroundCartoon.html', '/BackgroundNight.html', '/BackgroundCode.html']);
        const currentUrlIndex = ref(0); // 当前URL索引
        const iframeSrc = ref(urls.value[currentUrlIndex.value]);

        const switchIframeSrc = () => {
            currentUrlIndex.value = (currentUrlIndex.value + 1) % urls.value.length;
            iframeSrc.value = urls.value[currentUrlIndex.value];

            // 获取新的样式属性
            const newStyle = determineStyle(iframeSrc.value);
            document.documentElement.style.setProperty('--font-color', newStyle['font-color']);
        };
        function determineStyle(url) {
            switch (url) {
                case '/BackgroundDaytime.html':
                    return {
                        'font-color': '#000000',
                        'background-color': 'rgba(0, 0, 0, .2)'
                    };
                case '/BackgroundCartoon.html':
                    return {
                        'font-color': '#FFFFFF',
                        'background-color': 'rgba(0, 0, 0, .2)'
                    };
                case '/BackgroundNight.html':
                    return {
                        'font-color': '#FFFFFF',
                        'background-color': 'rgba(255, 255, 255, .2)'
                    };
                case '/BackgroundCode.html':
                    return {
                        'font-color': '#FFFFFF',
                        'background-color': 'rgba(255, 255, 255, .2)'
                    };
                default:
                    return {
                        'font-color': '#FFFFFF',
                        'background-color': 'rgba(0, 0, 0, .2)'
                    };
            }
        }
        return {
            iframeSrc,
            switchIframeSrc
        };
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
:root {
    --font-color: #000000;
    --background-color: rgba(0, 0, 0, .2);
}
body {
    color: var(--font-color) !important;
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
