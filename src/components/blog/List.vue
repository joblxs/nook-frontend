<template>
    <div class="header"></div>
    <Navigation></Navigation>
    <div class="doc-container" id="doc-container">
        <div class="container-fixed">
            <div class="col-content">
                <lay-container fluid class="inner" style="padding: 0;">
                    <lay-row class="article-list bloglist" id="LAY_bloglist" space="10">
                        <lay-col v-for="(blog, index) in blogItems" :key="index" md="11" sm="11" xs="23"
                                 class="article-item zoomIn article">
                            <div class="fc-flag">置顶</div>
                            <h5 class="title">
                                <span class="fc-blue">【原创】</span>
                                <a href="read.html">Java学习路线推荐</a>
                            </h5>
                            <div class="time">
                                <span class="day">1</span>
                                <span class="month fs-18">7<span class="fs-14">月</span></span>
                                <span class="year fs-18 ml10">2020</span>
                            </div>
                            <div class="content">
                                <a href="read.html" class="cover img-light">
                                    <img src="../../assets/images/xkbg.png">
                                </a>
                                这篇文章是为了介绍自己自学用过的Java视频资料。本套整合教程总共180+G，共450+小时。考虑到绝大部分视频至少要看两遍，而且视频总时长并不代表学习时长，所以零基础初学者总学习时间大约为：600小时视频时长
                                + 100小时理解 +
                                100小时练习，至少需要800小时。你可能觉得自己能一天学习8小时，实际上平均下来每天能学4小时都算厉害了。总会有各种原因，比如当天内容太难，公司聚会，要出差等等。如果周末你也是坚持学习，那么最理想状况下，6个半月就可以学完，达到工作后能被人带的水平。但我知道那其实基本不可能。
                            </div>
                            <div class="read-more">
                                <a href="read.html" class="fc-black f-fwb">继续阅读</a>
                            </div>
                            <aside class="f-oh footer">
                                <div class="f-fl tags">
                                    <span class="fa fa-tags fs-16"></span>
                                    <a class="tag">java路线</a>
                                </div>
                                <div class="f-fr">
                                    <span class="read">
                                        <lay-icon type="layui-icon-read" style="margin-right: 5px;"></lay-icon>
                                        <i class="num">213</i>
                                    </span>
                                    <!-- <span class="ml20">
                                        <i class="fa fa-comments fs-16"></i>
                                        <a href="javascript:void(0)" class="num fc-grey">1</a>
                                    </span> -->
                                </div>
                            </aside>
                        </lay-col>
                    </lay-row>
                </lay-container>
            </div>
            <div class="col-other">
                <div class="inner">
                    <div class="other-item" id="categoryandsearch" :class="{ 'fixed': isFixed }">
                        <div class="search">
                            <label class="search-wrap">
                                <input type="text" id="searchtxt" placeholder="输入关键字搜索"/>
                                <span class="search-icon" @click="toggleSearchResults">
                                    <i :class="['fa', { 'fa-search': !searchActive, 'fa-times': searchActive }]"></i>
                                </span>
                            </label>
                            <ul class="search-result" v-if="searchActive"></ul>
                        </div>
                        <ul class="category mt20" id="category">
                            <li data-index="0" class="slider"></li>
                            <li v-for="(category) in categories" :key="category.id">
                                <a :href="category.href">{{ category.name }}</a>
                            </li>
                        </ul>
                    </div>
                    <!--右边悬浮 平板或手机设备显示-->
                    <div class="category-toggle" ref="categoryToggle"  @click="categoryIn"><i class="layui-icon">&#xe603;</i></div>
                    <div class="article-category" ref="articleCategory" :class="{ 'layui-hide': !categoryVisible }" @click="closeCategory">
                        <div class="article-category-title">分类导航</div>
                            <a v-for="category in categories" :key="category.id" :href="category.href">{{ category.name }}</a>
                        <div class="f-cb"></div>
                    </div>
                    <!--遮罩-->
                    <div class="blog-mask animated layui-hide" ref="blogMask" :class="{ 'layui-hide': !categoryVisible }" @click="closeCategory"></div>
                    <div class="other-item">
                        <h5 class="other-item-title">热门文章</h5>
                        <div class="inner">
                            <ul class="hot-list-article">
                                <li><a href="/Blog/Read/9">SpringBoot 入门爬虫项目实战</a></li>
                                <li><a href="/Blog/Read/12">SpringBoot 2.x 教你快速入门</a></li>
                                <li><a href="/Blog/Read/13">java学习路线</a></li>
                                <li><a href="/Blog/Read/4">基于SpringBoot+JWT+Redis跨域单点登录的实现</a></li>
                                <li><a href="/Blog/Read/7">SpringBoot 中如何使用SwaggerAPI接口文档？</a></li>
                                <li><a href="/Blog/Read/11">小白轻松入门Redis</a></li>
                                <li><a href="/Blog/Read/14">微信一键登录功能的实现</a></li>
                                <li><a href="/Blog/Read/8">NPOI导入导出Excel</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="other-item">
                        <h5 class="other-item-title">置顶推荐</h5>
                        <div class="inner">
                            <ul class="hot-list-article">
                                <li><a href="/Blog/Read/16">java学习路线</a></li>
                                <li><a href="/Blog/Read/14">基于SpringBoot+JWT+Redis跨域单点登录的实现</a></li>
                                <li><a href="/Blog/Read/9">小白轻松入门Redis</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="other-item">
                        <h5 class="other-item-title">最近访客</h5>
                        <div class="inner">
                            <dl class="vistor">
                                <dd v-for="visitor in visitors" :key="visitor.name">
                                    <a href="javascript:;"><img :src="visitor.img"><cite>{{ visitor.name }}</cite></a>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="grid-footer">
        <div class="footer-fixed">
            <div class="copyright">
                <div class="info">
                    <div class="contact">
                        <a href="javascript:void(0)" class="github" target="_blank"><i class="fa fa-github"></i></a>
                        <a href="https://wpa.qq.com/msgrd?v=3&uin=930054439&site=qq&menu=yes" class="qq" target="_blank" title="930054439"><i class="fa fa-qq"></i></a>
                        <a href="https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=gbiysbG0tbWyuMHw8K-i7uw" class="email" target="_blank" title="930054439@qq.com"><i class="fa fa-envelope"></i></a>
                        <a href="javascript:void(0)" class="weixin"><i class="fa fa-weixin"></i></a>
                    </div>
                    <p class="mt05">
                        Copyright &copy; 2019-2020 ZQ博客 All Rights Reserved V.3.1.3 Power by ZQ博客
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Navigation from "./common/Navigation.vue";
import {layIcon, layRow} from '@layui/layui-vue';
import { ref, onMounted, onUnmounted, nextTick  } from 'vue';

export default {
    name: 'blogList',
    data() {
        return {
            blogItems: [
                {
                    title: 'Java学习路线推荐',
                    date: '2020年6月16日',
                    summary: '这篇文章是为了介绍自己自学用过的Java视频资料。本套整合教程总共180+G，共450+小时。考虑到绝大部分视频至少要看两遍，而且视频总时长并不代表学习时长，所以零基础初学者总学习时间大约为：600小时视频时长100小时理解 +100小时练习，至少需要800小时。你可能觉得自己能一天学习8小时，实际上平均下来每天能学4小时都算厉害了。总会有各种原因，比如当天内容太难，公司聚会，要出差等等。如果周末你也是坚持学习，那么最理想状况下，6个半月就可以学完，达到工作后能被人带的水平。但我知道那其实基本不可能。',
                    link: '#',
                    images: '../../assets/images/xkbg.png'
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
    components: {
        Navigation, layIcon, layRow
    },
    setup() {
        const categoryToggle = ref(null);
        const articleCategory = ref(null);
        const blogMask = ref(null);
        const searchActive = ref(false);
        const categoryVisible = ref(false);
        const isFixed = ref(false);
        const categories = ref([
            {id: 1, name: '全部文章', href: '/Blog/Article', index: 1},
            {id: 2, name: '技术分享', href: '/Blog/Tech', index: 2},
            {id: 3, name: '生活随笔', href: '/Blog/Life', index: 3},
            {id: 3, name: '生活随笔', href: '/Blog/Life', index: 3}
            // ... 其他类别
        ]);
        const visitors = ref([
            { name: 'Anonymous', img: 'image/a1.png' },
            { name: 'Dekstra', img: 'image/a4.png' },
            { name: '惜i', img: 'image/a2.png' },
            { name: '↙Aㄨ计划 ◆莪↘', img: 'image/a3.png' },
            { name: '.', img: 'image/a4.png' },
            { name: 'Lambert.', img: 'image/a1.png' },
            { name: '64ღ', img: 'image/a2.png' },
            { name: 'doBoor', img: 'image/a3.png' },
            { name: '毛毛小妖', img: 'image/a4.png' },
            { name: 'NULL', img: 'image/a1.png' },
            { name: '吓一跳', img: 'image/a2.png' },
            { name: '如初', img: 'image/a3.png' },
        ]);
        const categoryIn = () => {
            categoryVisible.value = true;
            // 确保 DOM 已更新
            nextTick(() => {
                categoryToggle.value.classList.add('layui-hide');
                articleCategory.value.classList.remove('categoryOut', 'layui-hide');
                articleCategory.value.classList.add('categoryIn', 'layui-show');
                blogMask.value.classList.remove('maskOut', 'layui-hide');
                blogMask.value.classList.add('maskIn', 'layui-show');
            });
        };
        const categoryOut = () => {
            // 定义动画结束时的处理函数
            const animationEndHandler = (event) => {
                // 确保事件监听器只被调用一次
                event.target.removeEventListener('animationend', animationEndHandler);

                // 检查是否是预期的元素触发了动画结束事件
                if (event.target === blogMask.value || event.target === articleCategory.value) {
                    if (blogMask.value.classList.contains('maskOut') || articleCategory.value.classList.contains('categoryOut')) {
                        blogMask.value.classList.add('layui-hide');
                        categoryToggle.value.classList.remove('layui-hide');
                        articleCategory.value.classList.remove('layui-show');
                    }
                }
            };

            // 添加事件监听器，以便在动画结束时执行操作
            blogMask.value.addEventListener('animationend', animationEndHandler);
            articleCategory.value.addEventListener('animationend', animationEndHandler);

            // 触发动画
            blogMask.value.classList.replace('maskIn', 'maskOut');
            articleCategory.value.classList.replace('categoryIn', 'categoryOut');
            categoryVisible.value = false;
        };

        const blogtype = () => {
            const slider = ref(0); // 假设你有一个初始值
            const categoryItems = ref(document.querySelectorAll('#category li'));

            categoryItems.value.forEach((item, index) => {
                item.addEventListener('mouseenter', () => {
                    item.classList.add('current');
                    slider.value = (index * 40) + 'px';
                    document.querySelector('.slider').style.top = slider.value;
                });
                item.addEventListener('mouseleave', () => {
                    item.classList.remove('current');
                    document.querySelector('.slider').style.top = slider.value;
                });
            });

            onMounted(() => {
                window.addEventListener('scroll', handleScroll);
            });

            onUnmounted(() => {
                window.removeEventListener('scroll', handleScroll);
            });

            const handleScroll = () => {
                const winPos = window.pageYOffset || document.documentElement.scrollTop;
                const categoryAndSearch = document.getElementById('categoryandsearch');
                if (winPos > 750) {
                    categoryAndSearch.classList.add('fixed');
                } else {
                    categoryAndSearch.classList.remove('fixed');
                }
            };
        };

        blogtype();

        function toggleSearchResults() {
            searchActive.value = !searchActive.value;
        }

        function toggleCategory() {
            categoryVisible.value = !categoryVisible.value;
        }

        function handleScroll() {
            const winPos = window.pageYOffset || document.documentElement.scrollTop;
            isFixed.value = winPos > 750;
        }

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        const closeCategory = () => {
            if (categoryVisible.value) {
                // 这里可以添加动画结束的处理逻辑
                categoryVisible.value = false;
                categoryToggle.value.classList.remove('layui-hide');
                categoryToggle.value.classList.add('layui-show');
                // 如果有动画，可以在这里添加监听动画结束的逻辑
            }
        };

        return {
            categoryIn,
            closeCategory,
            categoryOut,
            categoryToggle,
            articleCategory,
            blogMask,
            categories,
            searchActive,
            categoryVisible,
            visitors,
            isFixed,
            toggleSearchResults,
            toggleCategory,
        };
    }
}
</script>

<style src="../../assets/css/blog/master.css"></style>
<style src="../../assets/css/blog/gloable.css"></style>
<style src="../../assets/css/blog/blog.css"></style>

<style scoped>

</style>