<!--导航-->
<template>
    <div class="nav">
        <div id="menu" :class="menuClasses" @click="toggleMenu">
            <span></span><span></span><span></span>
        </div>
        <div id="navigation" :class="navClasses">
            <ul class="navigation-point">
                <li><a href="#">首页</a></li>
                <li><a href="/blog">博客</a></li>
                <li><a href="#">留言</a></li>
            </ul>
            <div class="navigation-logo"><a>Mr.li</a></div>
        </div>
    </div>
</template>

<script>
import {ref, computed, onMounted} from 'vue';

export default {
    name: 'NavHome',
    components: {

    },
    setup() {
        const nextButton = ref(null);
        const menuClosed = ref(true);
        const scrollToNextSection = () => {
            // 滚动到id为'section1'的元素
            const section1 = document.getElementById('section2');
            if (section1) {
                section1.scrollIntoView({behavior: 'smooth'});
            }
        };

        const toggleMenu = () => {
            menuClosed.value = !menuClosed.value;
        };

        const menuClasses = computed(() => ({
            'hover_animation': true,
            'menu_close': !menuClosed.value,
            'menu_open': menuClosed.value,
        }));

        const navClasses = computed(() => ({
            'navigation': true,
            'navigation_close': menuClosed.value,
            'navigation_open': !menuClosed.value,
        }));

        onMounted(() => {
            // 如果你需要在组件挂载后立即绑定事件，可以在这里添加
        });

        return {
            menuClosed,
            toggleMenu,
            menuClasses,
            navClasses,
            nextButton,
            scrollToNextSection
        };
    }
}
</script>

<style scoped>
.menu_close,.menu_open{position:fixed;z-index:1;width:40px;height:40px;border-radius:50%;right:55px;top:40px;cursor:pointer;background-color:rgba(0,0,0,.1);overflow:hidden;z-index:102;}
.menu_close:hover,.menu_open:hover{background:#6bc30d}
.menu_close span,.menu_open span{display:block;background:#FFF;width:26px;height:2px;line-height:10px;margin:0 auto;margin-top:5px}
.menu_open span:first-child,.menu_open span:last-child,.menu_open span:nth-last-of-type(2){-webkit-transform:rotate(0);transform:rotate(0);-webkit-transition:all .5s;-moz-transition:all .5s;-ms-transition:all .5s;-o-transition:all .5s;transition:all .5s}
.menu_close span:first-child{margin-top:18px}
.menu_close span{margin-top:0}
.menu_open span:first-child{margin-top:12px}
.menu_close span:last-child{display:none}
.menu_close span:first-child{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:all .5s;-moz-transition:all .5s;-ms-transition:all .5s;-o-transition:all .5s;transition:all .5s}
.menu_close span:nth-of-type(2){-webkit-transform:rotate(-45deg);transform:rotate(-45deg);margin-top:-2px;-webkit-transition:all .5s;-moz-transition:all .5s;-ms-transition:all .5s;-o-transition:all .5s;transition:all .5s}
.hover_animation{-webkit-transition:all .5s;-moz-transition:all .5s;-ms-transition:all .5s;-o-transition:all .5s;transition:all .5s}
.navigation,.navigation_close,.navigation_open{width:100%;height:100%;position:fixed;z-index:101}
.navigation_close{height:0}
.navigation_open{background:rgba(0,0,0,.6)}
.navigation:before,.navigation_close:before,.navigation_open:before{content:'';width:60%;height:100%;background:#fff;position:fixed;-webkit-transition:all .5s cubic-bezier(.19,1,.22,1);-moz-transition:all .5s cubic-bezier(.19,1,.22,1);-o-transition:all .5s cubic-bezier(.19,1,.22,1);transition:all .5s cubic-bezier(.19,1,.22,1);-webkit-transform:translateZ(0) translateX(45%) skew(-12deg);-moz-transform:translateZ(0) translateX(45%) skew(-12deg);-ms-transform:translateZ(0) translateX(45%) skew(-12deg);-o-transform:translateZ(0) translateX(45%) skew(-12deg);transform:translateZ(0) translateX(45%) skew(-12deg);-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden;content:'';top:0;z-index:11;background-color:#fff;background-image:-webkit-linear-gradient(46deg,#2f4d25,#f1f2f0);background-image:-moz-linear-gradient(46deg,#2f4d25,#f1f2f0);background-image:-o-linear-gradient(46deg,#2f4d25,#f1f2f0);background-image:linear-gradient(46deg,#2f4d25,#f1f2f0)}
.navigation_open:before{right:0}
.navigation_close:before{right:-60%}
.navigation-point{position:absolute;right:0;top:200px;z-index:101;font-size:20px}
.navigation-point li{display:block;text-align:right;line-height:80px}
.navigation-point li a{font-family:"Microsoft YaHei";color:#686967;display:inline-block;line-height:46px;padding:10px 50px;font-size:20px;color:#686967;text-decoration:none;-webkit-transition:color .6s linear;transition:color .6s linear;position:relative}
.navigation-point li a:before{-webkit-transition:all .3s linear;transition:all .3s linear;content:'';height:1px;background-color:transparent;position:absolute;top:50%;left:15px;right:105px}
.navigation-point li a:hover{color:#6bc30d}
.navigation-point li a:hover:before{background-color:#6bc30d;right:15px}
.navigation_open .navigation-point{display:block}
.navigation_close .navigation-point{display:none}
.navigation-logo{font-size:50px;position:absolute;right:0;bottom:0;z-index:101;padding:10px 50px}
.navigation-logo a{font-family:BarbaraHand;color:#686967;text-decoration:none}
.navigation_open .navigation-logo{display:block}
.navigation_close .navigation-logo{display:none}
</style>