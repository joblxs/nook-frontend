<template>
    <div class="col-content">
        <lay-container fluid>
            <lay-row space="10">
                <lay-col v-for="(blog, index) in blogItems" :key="index" md="8" sm="12" xs="24">
                    <div class="article-item">
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
                                <img src="@/assets/images/xkbg.png">
                            </a>
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
                            </div>
                        </aside>
                    </div>
                </lay-col>
            </lay-row>
        </lay-container>
    </div>
</template>

<script>
export default {
    name: 'BlogList',
    data() {
        return {
            blogItems: [
                {
                    title: 'Java学习路线推荐',
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
.col-content {
    float: left;
    width: calc(100% - 300px - 20px)
}

.article-item {
    overflow: hidden;
    background-color: rgb(0,0,0,.5);
    position: relative; /*overflow:hidden;*/
    margin-top: 20px;
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
    top: 9px
}

.article-item .title {
    line-height: 30px;
    padding: 5px 130px 5px 0;
    border-bottom: 1px solid #e8e9e7;
    font-size: 18px;
    font-weight: 400
}

.article-item .title span {
    font-size: 16px;
    font-weight: 400;
    display: inline-block;
    vertical-align: bottom
}

.article-item .time {
    font-family: SourceCodeProRegular, Menlo, Monaco, Consolas, "Courier New", monospace, 'Helvetica Neue', Arial, sans-serif;
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 0 20px 5px 20px;
    line-height: 32px
}

.article-item .time .day {
    display: block;
    text-align: center;
    font-weight: 700;
    font-size: 40px;
    position: relative;
    top: 2px
}

.article-item .content {
    margin: 20px 0 0 0;
    line-height: 28px;
    position: relative; /*overflow:hidden;*/
    min-height: 200px
}

.article-item .artiledetail img:hover {
    box-shadow: 0 0 5px #333;
}

.article-item .content a {
    margin: 0 2px
}

.article-item .content .cover {
    display: block;
    width: 300px;
    height: 180px;
    border: 1px solid #e8e9e7;
    overflow: hidden;
    float: left;
    margin-right: 20px
}

.article-item .content .cover img {
    display: block;
    width: 100% !important;
    height: 100% !important
}

.article-item .read-more {
    height: 40px;
    line-height: 40px;
    position: relative
}

.article-item .read-more:before {
    content: " ";
    display: inline-block;
    height: 1px;
    top: 20px;
    left: 100px;
    right: 0;
    position: absolute;
}

.article-item .footer a {
    display: inline-block;
    vertical-align: middle;
    font-style: normal
}

.article-item .footer i {
    display: inline-block;
    vertical-align: middle;
    font-style: normal
}

.article-item .footer .tags-icon:before {
    content: "\f02c"
}

.article-item .footer .tags .tag {
    display: inline-block;
    font-size: 12px;
    padding: 2px 5px;
    margin: 2px;
    text-decoration: none;
    -webkit-transition: all .2s;
    transition: all .2s
}

.article-item .footer .readicon {
    margin-right: 3px;
    font-size: 16px
}

.article-item .footer .readicon:before {
    content: "\f06e"
}

.article-item .footer .commenticon:before {
    content: "\f086"
}

.article-item .footer .num {
    font-family: SourceCodeProRegular, Menlo, Monaco, Consolas, "Courier New", monospace, 'Helvetica Neue', Arial, sans-serif;
    display: inline-block;
    vertical-align: middle;
    font-style: normal
}

.article-item .content a:hover, .article-item .footer a:hover, .article-item .title a:hover, .article-item a:hover {
    color: #6bc30d;
    text-decoration: underline
}

.article-item .footer .tags .tag:hover {
    background: #6bc30d
}

.article-item .content h6 {
    margin: 20px 0;
    border-left: 3px solid #6bc30d;
    min-height: 26px;
    line-height: 26px;
    padding: 5px 20px;
    font-size: 16px;
    font-weight: 400;
    text-shadow: 0 1px 0 rgba(255, 255, 255, .5);
    clear: both
}

.article-item .content .copyright {
    clear: both;
    padding: 15px 20px;
    line-height: 22px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, .8);
    font-size: 12px;
}

.article-item .content .copyright .f-toe {
    overflow: hidden;
    word-wrap: normal !important;
    white-space: nowrap;
    text-overflow: ellipsis
}

.article-item .content .copyright p {
    margin: 0
}

.article-item .content .copyright p:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
}

.article-item .content a {
    margin: 0 2px
}

.article-item .content .copyright a {
    text-decoration: none
}

.article-item .content .b-relation li:before {
    content: "◈";
    margin-right: 5px;
}

@media screen and (max-width: 1024px) {
    .col-content {
        width: 100%;
        float: none
    }
}

@media screen and (max-width: 500px) {
    .article-item .time {
        display: none
    }

    .article-item .title {
        padding-right: 0
    }

    .col-content {
        padding: 0 0
    }

    .article-item .content .cover {
        width: 100%;
        height: auto;
        float: none;
        margin-bottom: 10px
    }
}
</style>