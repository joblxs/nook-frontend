<template>
    <iframe class="background-iframe" src="/GlobalBackground.html" frameborder="0"></iframe>
    <!--导航-->
    <div class="nav">
        <div id="menu" :class="menuClasses" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
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
    <!--banner 横幅-->
    <div class="banner">
        <div class="section" id="section1">
            <div class="fp-tablecell">
                <div class="page1">
                    <div class="nav wow animate__animated animate__swing" data-wow-duration="2s">
                        <h1>lxs-Blog</h1>
                        <p>只要朝着一个方向努力，一切都会变得得心应手</p>
                    </div>
                    <lay-icon type="layui-icon-down" class="next wow animate__animated animate__zoomIn" data-wow-duration="2s" @click="scrollToNextSection"></lay-icon>
                </div>
            </div>
        </div>
    </div>
    <!--分类-->
    <div class="category">
        <div class="section" id="section2">
            <div class="fp-tablecell">
                <div class="page2">
                    <div class="warp-box">
                        <div class="new-article">
                            <div class="inner wow animate__animated animate__bounceIn" data-wow-delay=".2s">
                                <h1>博客分类</h1>
                                <p>
                                    只要朝着一个方向努力
                                    <br>一切都会变得得心应手
                                </p>
                            </div>
                        </div>
                        <lay-row class="layui-row">
                            <lay-col v-for="(news, index) in newsItems" :key="index" :md="8" sm="8" xs="24"
                                style="padding: 0 10px"
                                :class="`wow animate__animated animate__bounceInUp ${index === 1 ? 'delay-200' : index === 2 ? 'delay-400' : ''}`"
                            >
                                <div class="single-news">
                                    <div class="news-head">
                                        <img src="../assets/images/xkbg.png" alt="Java专栏">
                                        <a href="#" class="link">
                                            <lay-icon type="layui-icon-link"></lay-icon>
                                        </a>
                                    </div>
                                    <div class="news-content">
                                        <h4><a :href="news.link">{{ news.title }}</a></h4>
                                        <div class="date">{{ news.date }}</div>
                                        <p>{{ news.summary }}</p>
                                        <a href="#" class="btn">阅读更多</a>
                                    </div>
                                </div>
                            </lay-col>
                        </lay-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--about-->
    <div class="about">
        <div class="section" id="section3">
            <div class="fp-tablecell">
                <div class="page3">
                    <div class="warp-box">
                        <div class="warp">
                            <div class="inner">
                                <div class="links">
                                    <ul>
                                        <li class="wow animate__animated animate__backInLeft"><a href="#">关于</a></li>
                                        <li class="wow animate__animated animate__backInRight"><a href="#">+友情链接</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--一言-->
    <div class="hitokoto ">
        <div class="section" id="section4">
            <div class="fp-tablecell">
                <div class="page4">
                    <div class="warp-box">
                        <div class="about">
                            <div class="inner">
                                <h1 class="wow animate__animated animate__flip">lxs个人博客</h1>
                                <p class="wow animate__animated animate__flip">
                                    一天很短，开心了就笑，不开心了就过会儿再笑。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--footer-->
    <footer class="footer wow animate__animated animate__bounceInUp" id="contact">
        <div class="footer-top">
            <lay-container fluid class="container">
                <lay-row class="layui-row">
                    <lay-col md="8" sm="12" xs="24" style="padding: 0 10px">
                        <div class="single-widget about">
                            <div class="footer-logo">
                                <h2>lxs个人博客</h2>
                            </div>
                            <p>世界那么大，我想去看看</p>
                        </div>
                    </lay-col>
                    <lay-col md="8" sm="12" xs="24" style="padding: 0 10px">
                        <div class="single-widget">
                            <h2>相关链接</h2>
                            <ul class="social-icon">
                                <li class="active"><a href="#"><i class="fa fa-book"></i>博文</a></li>
                                <li class="active"><a href="#"><i class="fa fa-comments"></i>留言</a></li>
                                <li class="active"><a href="#"><i class="fa fa-share"></i>资源</a></li>
                                <li class="active"><a href="#"><i class="fa fa-snowflake-o"></i>日记</a></li>
                                <li class="active"><a href="#"><i class="fa fa-files-o"></i>归档</a></li>
                            </ul>
                        </div>
                    </lay-col>
                    <lay-col md="8" sm="12" xs="24" style="padding: 0 10px">
                        <div class="single-widget contact">
                            <h2>联系我</h2>
                            <ul class="list">
                                <li><i class="fa fa-map"></i>地址:深圳市南山区</li>
                                <li><i class="fa fa-qq"></i>QQ: 1435469178</li>
                                <li><i class="fa fa-envelope"></i>邮箱: 1435469178@qq.com</li>
                            </ul>
                        </div>
                    </lay-col>
                </lay-row>
            </lay-container>
        </div>
        <div class="copyright">
            <lay-container fluid class="container">
                <lay-row class="layui-row">
                    <lay-col md="24" sm="24" xs="24" style="padding: 0 10px" class="text-center">
                        <p>Copyright &copy; 2019-2020 ZQ个人博客 All Rights Reserved V.5.1.3 粤ICP备1231100号</p>
                    </lay-col>
                </lay-row>
            </lay-container>
        </div>
    </footer>
</template>

<script>
import {ref, computed, onMounted} from 'vue';
import {layRow, layIcon} from '@layui/layui-vue';
import WOW from 'wow.js'

export default {
    name: 'IndexHome',
    components: {
        layRow, layIcon
    },
    data() {
        return {
            newsItems: [
                {
                    title: 'Java专栏',
                    date: '2020年6月16日',
                    summary: '本专栏主要分享Java的各种常见问题，包括java学习路线，java基础，框架，微服务，项目，面试题，希望通过这些知识的分享能够提升自己的java水平',
                    link: '#'
                },
                {
                    title: 'Java专栏',
                    date: '2020年6月16日',
                    summary: '本专栏主要分享Java的各种常见问题，包括java学习路线，java基础，框架，微服务，项目，面试题，希望通过这些知识的分享能够提升自己的java水平',
                    link: '#'
                },
                {
                    title: 'Java专栏',
                    date: '2020年6月16日',
                    summary: '本专栏主要分享Java的各种常见问题，包括java学习路线，java基础，框架，微服务，项目，面试题，希望通过这些知识的分享能够提升自己的java水平',
                    link: '#'
                },
                // 重复的新闻项可以省略或替换为其他内容
            ]
        };
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

        onMounted(() => {
            new WOW({
                boxClass: "wow", // 需要执行动画的元素的class
                animateClass: "animate__animated", // 动画的class
                offset: 0, // 触发动画的滚动偏移量
                mobile: true, // 是否在移动设备上启用
                live: true, // 是否对动态添加的元素进行动画处理
                scrollContainer: null,
                resetAnimation: true,
            }).init();
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

<style src="../assets/css/index_style.css"></style>
<style scoped>

</style>
