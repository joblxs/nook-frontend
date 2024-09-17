<template>
    <div class="header"></div>
    <Navigation></Navigation>
    <div class="doc-container" id="doc-container">
        <div class="container-fixed">
            <div class="col-content">
                <lay-container fluid class="inner" style="padding: 0;">
                    <lay-row class="article-list bloglist" id="LAY_bloglist" space="10">
                        <lay-col v-for="(blog, index) in blogItems" :key="index" md="11" sm="11" xs="24" class="article-item zoomIn article">
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
                    <Category></Category>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../assets/css/master.css';
import '../../assets/css/gloable.css';
import Navigation from "./common/Navigation.vue";
import Category from "./common/Category.vue";
import {layIcon, layRow} from '@layui/layui-vue';
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
                // 重复的新闻项可以省略或替换为其他内容
            ]
        };
    },
    components: {
        Navigation, Category, layIcon, layRow
    }
}
</script>

<style scoped>
.header {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: #2E2E2E;
    position: fixed !important;
    background-size: 100% 100%
}
pre{white-space:pre}
.container-fixed:after{content:".";display:block;height:0;clear:both;visibility:hidden}
.col-content{float:left}
.col-other{float:right}
.col-content{width:calc(100% - 300px - 20px)}
.article-list{position:relative}
.bloglist .article-item{overflow:hidden;}
.article-item{padding:20px 30px 25px 30px;position:relative;/*overflow:hidden;*/margin-top:20px;margin-right:10px;background-color:#fff}
.article-item .fc-flag{position:absolute;height:20px;line-height:20px;text-align:center;width:74px;background-color:#ff5722;color:#fff;transform:rotate(-45deg);left:-18px;top:9px}
.article-item .title{line-height:30px;padding:5px 130px 5px 0;border-bottom:1px solid #e8e9e7;font-size:18px;font-weight:400}
.article-item .title span{font-size:16px;font-weight:400;display:inline-block;vertical-align:bottom}
.article-item .title a{color:#212220}
.article-item .time{font-family:SourceCodeProRegular,Menlo,Monaco,Consolas,"Courier New",monospace,'Helvetica Neue',Arial,sans-serif;position:absolute;right:10px;top:10px;background-color:#fff;padding:0 20px 5px 20px;line-height:32px}
.article-item .time .day{display:block;text-align:center;font-weight:700;font-size:40px;color:#6bc30d;position:relative;top:2px}
.article-item .time .month,.article-item .time .year{color:#989997}
.article-item .content{margin:20px 0 0 0;line-height:28px;position:relative;min-height:200px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;}
.article-item .artiledetail img:hover{box-shadow: 0 0 5px #333;}
.article-item .content a{color:#3e8bc7;margin:0 2px}
.article-item .content .cover{display:block;width:100%;height:180px;border:1px solid #e8e9e7;overflow:hidden;float:left;margin-right:20px}
.article-item .content .cover img{display:block;width:100%!important;height:100%!important}
.article-item .read-more{height:40px;line-height:40px;position:relative}
.article-item .read-more:before{content:" ";display:inline-block;height:1px;top:20px;left:100px;right:0;position:absolute;background-color:#d0d0d0}
.article-item .footer{color:#787977}
.article-item .footer a{display:inline-block;vertical-align:middle;font-style:normal}
.article-item .footer i{display:inline-block;vertical-align:middle;font-style:normal}
.article-item .footer .tags-icon:before{content:"\f02c"}
.article-item .footer .tags .tag{display:inline-block;font-size:12px;padding:2px 5px;background-color:#f1f2f0;color:#787977;margin:2px;text-decoration:none;-webkit-transition:all .2s;transition:all .2s}
.article-item .footer .readicon{margin-right:3px;font-size:16px}
.article-item .footer .readicon:before{content:"\f06e"}
.article-item .footer .commenticon:before{content:"\f086"}
.article-item .footer .num{font-family:SourceCodeProRegular,Menlo,Monaco,Consolas,"Courier New",monospace,'Helvetica Neue',Arial,sans-serif;display:inline-block;vertical-align:middle;font-style:normal}
.article-item .content a:hover,.article-item .footer a:hover,.article-item .title a:hover,.article-item a:hover{color:#6bc30d;text-decoration:underline}
.article-item .footer .tags .tag:hover{color:#fff;background:#6bc30d}
.col-other{width:300px}
.hot-list-article li a{color:#787977}
.hot-list-article li:before{width:22px;height:22px;line-height:22px;text-align:center;content:counter(nums,decimal);position:absolute;left:0;top:5px;border-radius:100%;background-color:#edefee;text-shadow:0 1px 0 rgba(255,255,255,.5);font-family:SourceCodeProRegular,Menlo,Monaco,Consolas,"Courier New",monospace,'Helvetica Neue',Arial,sans-serif}
.hot-list-article li:first-child:before,.hot-list-article li:nth-child(2):before,.hot-list-article li:nth-child(3):before{color:#fff;text-shadow:none}
.hot-list-article li:first-child:before{background-color:#e24d46}
.hot-list-article li:nth-child(2):before{background-color:#2ea7e0}
.hot-list-article li:nth-child(3):before{background-color:#6bc30d}
.hot-list-article li a:hover{text-decoration:underline;color:#6bc30d}
.article-item .content h6{margin:20px 0;border-left:3px solid #6bc30d;min-height:26px;line-height:26px;padding:5px 20px;background-color:#f8f9f7;font-size:16px;font-weight:400;color:#585957;text-shadow:0 1px 0 rgba(255,255,255,.5);clear:both}
.article-item .content .copyright{clear:both;background-color:#f8f9f7;padding:15px 20px;line-height:22px;text-shadow:0 1px 0 rgba(255,255,255,.8);font-size:12px;color:#787977}
.article-item .content .copyright .f-toe{overflow:hidden;word-wrap:normal!important;white-space:nowrap;text-overflow:ellipsis}
.article-item .content .copyright p{margin:0}
.article-item .content .copyright p:after{content:".";display:block;height:0;clear:both;visibility:hidden}
.article-item .content a{color:#3e8bc7;margin:0 2px}
.article-item .content .copyright a{text-decoration:none}
.article-item .content .b-relation li:before{content:"◈";margin-right:5px;color:#787977}
.share{margin:30px 0 0 0;text-align:center;font-size:30px}
.share ul{overflow:hidden;margin:0 auto;display:table}
.share ul::after{clear:both}
.share ul li{float:left;width:50px;height:50px;box-sizing:border-box;border:2px solid #e8e9e7;border-radius:50%;margin:0 10px;opacity:.75;transition:opacity .36s linear;cursor:pointer;position:relative;text-rendering:auto}
.share ul li span{display:block;width:100%;height:100%;position:relative}
.share ul li:hover{opacity:1}
.share ul li.f-praise{border-color:#f46753}
.share ul li.f-weinxi{border-color:#5ac64f}
.share ul li.f-sina{border-color:#ff7171}
.share ul li.f-qzone{border-color:#fbb611}
.share ul li.f-qq{border-color:#14afff}
.share ul li a{position:absolute;background:url(../../assets/images/xkbg.png) no-repeat;background-size:32px 160px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0}
.share ul li .s-praise{background-position:0 -128px}
.share ul li .s-weinxi{background-position:0 0}
.share ul li .s-sina{background-position:0 -64px}
.share ul li .s-qzone{background-position:0 -32px}
.share ul li i{color:#14afff}
.blog-comment{position:relative;margin-bottom:10px}
.blog-comment img{width:22px;height:22px}
.blog-comment li:first-child{border-top:1px dotted #bbb}
.blog-comment li{border-bottom:1px dotted #bbb;padding:15px 0 10px 0}
.blog-comment .comment-content,.blog-comment .info,.blog-comment .replycontainer{margin-left:53px}
.blog-comment .info-footer{font-size:13px}
.blog-comment .info,.blog-comment .replycontainer{padding-top:5px}
.blog-comment .replycontainer .layui-form-item{margin-bottom:5px}
.blog-comment .info {overflow-x:hidden}
.blog-comment .info span{padding-right:5px}
.blog-comment .info .username{color:#01AAED}
.blog-comment .info .btn-reply{color:#009688}
.blog-comment .comment-content{padding:2px 0 5px 0;min-height:30px;font-size:13px;word-break: break-all}
.blog-comment hr{margin-left:53px}
.comment-parent>img{width:45px;height:45px;margin:5px 5px 5px 0;position:absolute;border-radius:50px}
.comment-child>img{width:40px;height:40px;margin:5px 5px 5px 0;position:absolute;border-radius:50px}
.comment-child{margin-left:53px;min-height:50px}
.comment-child .info{margin-left:48px;font-size:12px;line-height:20px}
.vistor{text-align:center}
.vistor dd{position:relative;width:60px;height:65px;/*margin:10px 10px 0 0;*/display:inline-block;vertical-align:top;font-size:12px}
.vistor dd a img{width:60px;height:60px;border-radius:2px}
.vistor dd a cite{position:absolute;bottom:5px;left:0;width:100%;height:20px;line-height:20px;text-align:center;background-color:rgba(0,0,0,.2);color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.categoryIn{-moz-animation:categoryIn .5s;-o-animation:categoryIn .5s;-webkit-animation:categoryIn .5s;animation:categoryIn .5s}
.categoryOut{-moz-animation:categoryOut .5s;-o-animation:categoryOut .5s;-webkit-animation:categoryOut .5s;animation:categoryOut .5s}


.maskIn{-moz-animation:maskFadeIn .5s;-o-animation:maskFadeIn .5s;-webkit-animation:maskFadeIn .5s;animation:maskFadeIn .5s}
.maskOut{-moz-animation:maskFadeOut .5s;-o-animation:maskFadeOut .5s;-webkit-animation:maskFadeOut .5s;animation:maskFadeOut .5s}
@-webkit-keyframes bounceInDown{0%,60%,75%,90%,to{transition-timing-function:cubic-bezier(.215,.61,.355,1)}
0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}
60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}
75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}
90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}
to{-webkit-transform:none;transform:none}
}
@keyframes bounceInDown{0%,60%,75%,90%,to{transition-timing-function:cubic-bezier(.215,.61,.355,1)}
0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}
60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}
75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}
90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}
to{-webkit-transform:none;transform:none}
}
@-webkit-keyframes drop{0%{-webkit-transform:translate3d(0,-600px,0)}
60%{-webkit-transform:translate3d(0,25px,0)}
75%{-webkit-transform:translate3d(0,-10px,0)}
90%{-webkit-transform:translate3d(0,5px,0)}
100%{-webkit-transform:translate3d(0,0,0)}
}
@keyframes drop{0%{transform:translate3d(0,-600px,0)}
60%{transform:translate3d(0,25px,0)}
75%{transform:translate3d(0,-10px,0)}
90%{transform:translate3d(0,5px,0)}
100%{transform:translate3d(0,0,0)}
}
@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}
100%{-webkit-transform:rotate(359deg)}
}
@keyframes spin{0%{transform:rotate(0)}
100%{transform:rotate(359deg)}
}
@keyframes categoryIn{from{right:-180px}
to{right:0}
}
@-moz-keyframes categoryIn{from{right:-180px}
to{right:0}
}
@-webkit-keyframes categoryIn{from{right:-180px}
to{right:0}
}
@keyframes categoryOut{from{right:0}
to{right:-180px}
}
@-moz-keyframes categoryOut{from{right:0}
to{right:-180px}
}
@-webkit-keyframes categoryOut{from{right:0}
to{right:-180px}
}
@keyframes maskFadeIn{from{opacity:0}
to{opacity:1}
}
@-moz-keyframes maskFadeIn{from{opacity:0}
to{opacity:1}
}
@-webkit-keyframes maskFadeIn{from{opacity:0}
to{opacity:1}
}
@keyframes maskFadeOut{from{opacity:1}
to{opacity:0}
}
@-moz-keyframes maskFadeOut{from{opacity:1}
to{opacity:0}
}
@-webkit-keyframes maskFadeOut{from{opacity:1}
to{opacity:0}
}
@media screen and (max-width:1024px){.f-qq,.f-qzone{display:none}
.col-content,.col-other{width:100%;float:none}
}
@media screen and (max-width:500px){.article-item .time{display:none}
.article-item .title{padding-right:0}
.col-content,.col-other{padding:0 0}
.article-item .content .cover{width:100%;height:auto;float:none;margin-bottom:10px}
}

</style>