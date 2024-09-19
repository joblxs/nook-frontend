<!--个人站点-->
<template>
    <div class="station">
        <div class="station-title wow animate__animated animate__bounceIn" data-wow-delay=".2s">
            <h1>个人站点</h1>
            <p>只要朝着一个方向努力，一切都会变得得心应手</p>
        </div>
        <div class="station-site wow animate__animated animate__bounceIn">
            <lay-checkcard-group fluid>
                <lay-row space="30">
                    <lay-col md="6" sm="12" xs="24" v-for="(site, index) in siteItems" :key="index">
                        <lay-checkcard :title="site.title" @click="navigateTo(site.link)">
                            <template #avatar>
                                <lay-icon :type="site.icon" color="#009688"  size="24px"></lay-icon>
                            </template>
                        </lay-checkcard>
                    </lay-col>
                </lay-row>
            </lay-checkcard-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SiteHome',
    data() {
        return {
            siteItems: [
                {
                    title: '个人主页',
                    icon: 'layui-icon-home',
                    link: 'https://lxshuai.top/'
                },
                {
                    title: '博客',
                    icon: 'layui-icon-template',
                    link: 'https://www.lxshuai.top/'
                },
                {
                    title: '图床',
                    icon: 'layui-icon-carousel',
                    link: 'https://pic.lxshuai.top/'
                },
                {
                    title: '图床',
                    icon: 'layui-icon-carousel',
                    link: 'https://pic.lxshuai.top/'
                },
                {
                    title: '图床',
                    icon: 'layui-icon-carousel',
                    link: 'https://pic.lxshuai.top/'
                },
                // 重复的新闻项可以省略或替换为其他内容
            ]
        };
    },
    setup() {
        const navigateTo = (url) => {
            if (url.startsWith('#')) {
                return false
            }
            window.location.href = url;
        };
        return {
            navigateTo
        };
    }
}
</script>

<style scoped>
.station {
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 5%;
    margin-left: auto;
    margin-right: auto;
}

.station-title {
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
.layui-checkcard {
    background-color: rgba(255,255,255,.5);
}
</style>