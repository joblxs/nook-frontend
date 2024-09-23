<template>
    <lay-container fluid>
        <lay-row space="30">
            <lay-col v-for="(blog, index) in blogItems" :key="index" md="8" sm="12" xs="24">
                <div class="article-item wow animate__animated animate__zoomIn">
                    <div class="fc-flag">置顶</div>
                    <div class="recent-post-title">
                        <p class="title">{{ blog.title }}</p>
                    </div>
                    <div class="recent-post-info">
                        <div class="recent-post-meta">
                            <div class="article-meta-wrap">
                                    <span class="post-meta-date">
                                        <lay-icon type="layui-icon-release" style="color: #0aafe6;font-size: 12px"></lay-icon>
                                        <span> 发布于 </span>
                                        <time datetime="2023-03-05T16:00:00.000Z" title="发表于 2023-03-05 16:00:00" style="display: inline;">2023-3-6</time>
                                        <span> | </span>
                                        <lay-icon type="layui-icon-refresh" style="color: #0aafe6;font-size: 12px"></lay-icon>
                                        <span> 更新于 </span>
                                        <time datetime="2023-03-20T23:00:00.000Z" title="更新于 2023-03-20 23:00:00" style="display: inline;">2023-3-21</time>
                                    </span>
                                <span>
                                        <span> | </span>
                                        <lay-icon type="layui-icon-component" style="color: #0aafe6;font-size: 12px"></lay-icon>
                                        <span> 魔改教程 </span>
                                    </span>
                                <span>
                                        <span> | </span>
                                        <lay-icon type="layui-icon-note" style="color: #0aafe6;font-size: 12px"></lay-icon>
                                        <span> Hexo </span>
                                        <span> • </span>
                                        <span> Butterfly </span>
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </lay-col>
        </lay-row>
    </lay-container>
</template>

<script>
export default {
    name: 'BlogList',
    data() {
        return {
            blogItems: [
                {
                    title: 'Java学习路线推荐Java学习路线推荐Java学习路线推荐Java学习路线推荐Java学习路线推荐Java学习路线推荐Java学习路线推荐Java学习路线推荐Java学习路线推荐',
                    date: '2020年6月16日',
                    summary: '这篇文章是为了介绍自己自学用过的Java视频资料。本套整合教程总共180+G，共450+小时。考虑到绝大部分视频至少要看两遍，而且视频总时长并不代表学习时长，所以零基础初学者总学习时间大约为：600小时视频时长100小时理解 +100小时练习，至少需要800小时。你可能觉得自己能一天学习8小时，实际上平均下来每天能学4小时都算厉害了。总会有各种原因，比如当天内容太难，公司聚会，要出差等等。如果周末你也是坚持学习，那么最理想状况下，6个半月就可以学完，达到工作后能被人带的水平。但我知道那其实基本不可能。',
                    link: '#',
                    images: '@/assets/images/xkbg.png'
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
}
</script>

<style scoped>

.article-item {
    overflow: hidden;
    position: relative;
    margin-top: 20px;
    border-radius: 5%;
    background: rgba(0, 0, 0, .3);
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;
}

.article-item:hover {
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.8);
}

.article-item .fc-flag {
    position: absolute;
    height: 20px;
    line-height: 20px;
    text-align: center;
    width: 74px;
    background-color: #ff5722;
    transform: rotate(-45deg);
    left: -18px;
    top: 9px;
    z-index: 1;
}

.article-item .recent-post-title {
    height: 150px;
    width: 100%;
    background: rgba(25, 25, 25, .4);
    text-align: center;
    clip-path: polygon(0 100px, 0 0, 100% 0, 100% 100px, 50% 100%);
}

.article-item .recent-post-title .title {
    -webkit-line-clamp: 3;
    font-size: 15px;
    padding-top: 30px;
    line-height: 25px;
    margin: 0 25px 30px 25px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

.article-item .recent-post-info {
    margin-top: 30px;
    height: 100px;
    width: 100%;
    padding: 0 25px 5px 25px;
    line-height: 25px;
}

@media screen and (max-width: 500px) {
    .article-item .title {
        padding-right: 0
    }
    .article-item .content .cover {
        width: 100%;
        height: auto;
        float: none;
        margin-bottom: 10px
    }
}
</style>