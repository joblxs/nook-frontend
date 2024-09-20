<template>
    <div class="section">
        <div class="links">
            <ul>
                <li class="wow animate__animated animate__backInLeft" v-for="(site, index) in siteItems" :key="index">
                    <a :href="site.link"><lay-icon :type="site.icon" style="margin-right: 10px;"></lay-icon>{{site.title}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterHome',
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
            ]
        };
    },
}
</script>

<style scoped>
.section {
    width: 100%;
    position: relative;
    padding: 100px 0;
    /* background-image: url(https://pic.lxshuai.top/i/2024/05/21/664ca44165f63.webp); */
    background-color:rgba(0,0,0,.5);
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
}

.links li {
    display: inline-block;
    width: 200px;
    height: 46px;
    margin: 10px;
    border: 1px solid #b4b4b4;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all .6s linear;
    transition: all .6s linear;
    position: relative;
    text-align: center;
    overflow: hidden;
    background-color: rgb(0, 0, 0, .3);
}

.links li a {
    display: block;
    line-height: 26px;
    padding: 10px;
    text-align: center;
    color: #FFF;
    text-decoration: none;
    font-size: 14px;
    -webkit-transition: all .6s linear;
    transition: all .6s linear;
    position: relative;
    z-index: 1;
}

.links li:after {
    content: '';
    width: 0;
    background-color: #6bc30d;
    height: 46px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    -webkit-transition: all .6s linear;
    transition: all .6s linear;
}

.links li:hover {
    border-color: #fff;
    color: #fff;
}

.links li:hover:after {
    width: 100%;
}
</style>