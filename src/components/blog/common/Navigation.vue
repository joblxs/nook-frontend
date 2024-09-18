<template>
    <header class="grid-header">
        <div class="header-fixed">
            <div class="header-inner">
                <a href="javascript:void(0)" class="header-logo" id="logo">Mr.li</a>
                <nav class="nav" id="nav" v-bind:style="navStyle">
                    <ul>
                        <li v-for="link in navItems" :key="link.id" :class="{ current: isActive(link.href) }">
                            <a :href="link.href">{{ link.text }}</a>
                        </li>
                    </ul>
                </nav>
                <a href="#" class="blog-user">
                    <lay-icon type="layui-icon-search"></lay-icon>
                </a>
                <a class="phone-menu" @click="toggleNav">
                    <i></i>
                    <i></i>
                    <i></i>
                </a>
            </div>
        </div>
    </header>
</template>

<script>
import {ref, onMounted, watch, computed} from 'vue';
import {layIcon} from '@layui/layui-vue';

export default {
    name: 'NavCommon',
    components: {
        layIcon
    },
    setup() {
        const isNavVisible = ref(false); // 使用ref来响应式地跟踪导航的显示状态
        const navItems = ref([
            {id: 1, text: '首页', href: '/'},
            {id: 2, text: '博客', href: '/blog'}, // 确保这里的路径是正确的
            {id: 3, text: '留言', href: '/message'},
            {id: 4, text: '日记', href: '/diary'},
            {id: 5, text: '友链', href: '/friend-links'},
        ]);
        const currentPath = ref(window.location.pathname);

        const isActive = (href) => {
            return currentPath.value === href;
        };

        const toggleNav = () => {
            isNavVisible.value = !isNavVisible.value;
        };
        const navStyle = computed(() => {
            return {
                display: isNavVisible.value ? 'block' : 'none'
            };
        });

        watch(() => window.location.pathname, (newPath) => {
            currentPath.value = newPath;
        });

        onMounted(() => {
            currentPath.value = window.location.pathname;
        });

        return {
            navItems,
            isNavVisible,
            isActive,
            toggleNav,
            navStyle
        };
    }
};
</script>

<style scoped>
a, img {text-decoration: none;border: none}
button, input, textarea {outline: 0;border: none;font: 14px/1.5 "Microsoft YaHei", "微软雅黑", "Helvetica Neue", "Hiragino Sans GB", Helvetica, Tahoma, sans-serif;color: #515250}
h4 {font-size: 20px}
li {list-style: none}
body, html {background-color: rgba(255, 255, 255, .5);font: 14px/1.5 "Helvetica neue", Helvetica, Tahoma, "lantinghei sc", "Microsoft Yahei", sans-serif;color: #515250;-webkit-font-smoothing: antialiased;-webkit-backface-visibility: hidden;overflow-x: hidden}
.grid-header {width: 100%;min-height: 60px;position: fixed;background-color: rgba(255, 255, 255, 1);z-index: 11002;top: 0;left: 0;border-bottom: 1px solid #e8e9e7;font-size: 14px}
.container-fixed, .footer-fixed, .header-fixed {width: 1280px;margin-left: auto;margin-right: auto;position: relative}
.header-inner {margin-left: 10px;margin-right: 10px;position: relative}
.header-logo {font-family: BarbaraHand;font-size: 40px;color: #444647;text-align: center;position: absolute;left: 0}
.nav {display: block;position: absolute;right: 15%}
.nav ul {list-style-type: none;padding: 0;}
.nav li {display: block;float: left;margin: 10px 5px;position: relative}
.nav li:before {width: 0;height: 2px;position: absolute;bottom: -11px;left: 50%;background-color: #6bc30d;content: "";transition: all .6s;z-index: -1}
.nav li a:hover {color: #6bc30d;}
.nav li a {display: block;line-height: 32px;padding: 4px 28px;color: #212220;font-weight: 400;font-size: 15px;text-shadow: 0 1px 0 rgba(255, 255, 255, .2);-webkit-transition: all .2s;transition: all .2s}
.nav .current:before {width: 100%;left: 0}
.nav .current a {color: #6bc30d}
.blog-user {position: absolute;line-height: 60px;font-size: 30px}
.blog-user > img {border-radius: 50%;width: 40px;height: 40px}
.phone-menu {width: 50px;height: 50px;display: inline-block;position: absolute;cursor: pointer;right: 0;top: 5px}

.phone-menu i {
    background: #787977;
    display: inline-block;
    width: 22px;
    height: 2px;
    position: absolute;
    left: 14px
}

.phone-menu i:nth-of-type(1) {
    top: 18px
}

.phone-menu i:nth-of-type(2) {
    top: 25px
}

.phone-menu i:nth-of-type(3) {
    top: 32px
}

/* 添加一个控制导航显示的样式 */
.nav ul {
    display: block; /* 默认显示 */
    transition: all 0.5s;
}

.nav ul[hidden] {
    display: none; /* 隐藏导航 */
}

.grid-footer {
    background-color: #212220;
    color: #919290;
    font-size: 14px;
    padding: 20px 0 0 0;
    position: relative;
    zoom: 1;
    clear: both;
    line-height: 20px;
    margin-top: 40px;
    overflow: hidden
}

.copyright {
    padding: 10px 0 10px 0
}

.copyright .info {
    position: relative;
    text-align: center
}

.copyright p {
    color: #565755;
    font-size: 13px
}

.copyright .contact a {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, .2);
    text-align: center;
    line-height: 30px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, .5);
    font-size: 14px;
    margin-left: 15px;
    margin-right: 0;
    border-radius: 100%;
    text-decoration: none;
    color: rgba(255, 255, 255, .5);
    -webkit-transition: all .3s;
    transition: all .3s
}

.copyright .contact a:hover {
    color: #fff
}

.copyright .contact .github:hover {
    background-color: #b952c5
}

.copyright .contact .qq:hover {
    background-color: #d25744
}

.copyright .contact .email:hover {
    background-color: #668f20
}

.copyright .contact .weixin:hover {
    background-color: #06a2c9
}

.doc-container {
    position: relative;
    padding-top: 60px;
    -webkit-transition: all .2s;
    transition: all .2s;
    min-height: 100vh
}

.lo {
    width: 250px;
    height: 60px;
    padding: 10px 15px;
    clear: both;
    border-radius: 4px
}

.lo input {
    margin-left: 15px;
    border: 1px solid #e8e9e7
}

.lo button {
    margin-top: 10px;
    padding: 5px 15px;
    cursor: pointer
}

.lo .waiting {
    padding: 5px 15px;
    font-family: FontAwesome;
    font-style: normal;
    text-rendering: auto;
    font-size: 20px;
    display: none
}

.lo .waiting:before {
    content: "\f110";
    -webkit-animation: spin 2s infinite linear;
    animation: spin 2s infinite linear
}

.artcle {
    transition: animation .3s linear
}

.zoomIn {
    animation: zoomIn 1s both
}

@keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }
    50% {
        opacity: 1
    }
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0)
    }
    100% {
        -webkit-transform: rotate(359deg)
    }
}

@keyframes spin {
    0% {
        transform: rotate(0)
    }
    100% {
        transform: rotate(359deg)
    }
}

@media screen and (min-width: 1025px) {
    .blog-user {
        right: 0
    }

    .phone-menu {
        display: none
    }

    .nav {
        display: block !important
    }
}

@media screen and (max-width: 1366px) {
    .container-fixed, .footer-fixed, .header-fixed {
        width: 90%
    }

    .phone-menu {
        display: none
    }

    .nav {
        display: block
    }
}

@media screen and (max-width: 1024px) {
    .header-logo {
        left: 25%;
        width: 50%
    }

    .nav {
        position: fixed;
        top: 60px;
        left: 0;
        right: 0
    }

    .container-fixed, .footer-fixed, .header-fixed {
        width: 90%
    }

    .phone-menu {
        display: block
    }

    .nav {
        display: none;
        width: 100%;
        background: rgba(255, 255, 255, 1)
    }

    .nav li:before {
        bottom: 0;
        z-index: 10
    }

    .nav li {
        float: none;
        border-bottom: 1px solid #e8e9e7
    }

    .nav li:last-child {
        border: 0
    }
}

@font-face {
    font-family: 'BarbaraHand';
    src: url('../../../assets/fonts/barbarahand-webfont.woff2') format('woff2');
    font-weight: 400;
    font-style: normal
}

</style>