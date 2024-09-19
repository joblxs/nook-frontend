<!--个人站点-->
<template>
    <div class="station">
        <div class="station-title wow animate__animated animate__bounceIn" data-wow-delay=".2s">
            <h1>个人站点</h1>
            <p>只要朝着一个方向努力，一切都会变得得心应手</p>
        </div>
        <div class="station-site wow animate__animated animate__bounceIn">
            <lay-container fluid>
                <lay-row space="30">
                    <lay-col md="8" sm="12" xs="24" v-for="(news, index) in newsItems" :key="index" >
                        <div class="single-news">
                            <div class="news-head">
                                <img src="../../assets/images/xkbg.png" alt="Java专栏">
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
            </lay-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SiteHome',
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
}
</script>

<style scoped>
.station {
    width:90%;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 5%;
    margin-left: auto;
    margin-right: auto;
}

.station-title {
    max-width: 800px;
    width: 90%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

.station-title h1 {
    font-size: 32px;
    padding-bottom: 30px;
    position: relative;
    font-weight: 500
}

.station-title h1:after {
    position: absolute;
    width: 50px;
    height: 2px;
    content: "";
    left: 50%;
    margin-left: -25px;
    bottom: -1px;
    background: #00C2FF
}

.station-title p {
    margin-top: 20px;
    line-height: 22px
}
.station-site {
    margin: 30px 0 20px 0;
}
.station-site .single-news{margin-top:50px;background:#faf9f9}
.station-site .single-news:hover .news-head img{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);transform:scale(1.2)}
.station-site .single-news:hover .news-head:before{opacity:1;visibility:visible;-webkit-transform:translateY(0);-moz-transform:translateY(0);transform:translateY(0)}
.station-site .single-news:hover .link{top:50%;opacity:1;visibility:visible}
.station-site .news-head{position:relative;overflow:hidden}
.station-site .news-head::before{position:absolute;width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.51);content:"";opacity:0;visibility:hidden;-webkit-transition:all .4s ease;-moz-transition:all .4s ease;transition:all .4s ease;-webkit-transform:translateY(-100%);-moz-transform:translateY(-100%);transform:translateY(-100%);z-index:8}
.station-site .news-head img{width:100%;height:244px;-webkit-transition:all .4s ease;-moz-transition:all .4s ease;transition:all .4s ease}
.station-site .link{position:absolute;left:0;top:0;width:40px;height:40px;background:#333;color:#fff;opacity:0;visibility:hidden;text-align:center;left:50%;margin:-20px 0 0 -20px;line-height:40px;z-index:9;-webkit-transition:all .4s ease;-moz-transition:all .4s ease;transition:all .4s ease}
.station-site .news-content{padding:30px 15px}
.station-site .news-content h4{margin-bottom:10px}
.station-site .news-content .date{color:#bbb;font-size:12px;margin-bottom:15px}
.station-site .news-content p{color:#999;height:55px;overflow:hidden}
.station-site .news-content .btn{display:inline-block;margin-top:15px;padding:0;background:0 0;border:none;color:#29B6F6;-webkit-transition:all .4s ease;-moz-transition:all .4s ease;transition:all .4s ease}
.station-site .news-content .btn:hover{color:#333}
.station-site .new-article{text-align:center}
.station-site .inner{display:inline-block;vertical-align:middle}
.station-site .new-article h1{font-size:32px;padding-bottom:30px;position:relative;font-weight:500}
.station-site .new-article h1:after{position:absolute;width:50px;height:2px;content:"";left:50%;margin-left:-25px;bottom:-1px;background:#00C2FF}
.station-site .new-article p{margin-top:20px;line-height:22px;color:#888}
</style>