<!--横幅-->
<template>
    <div class="banCommon" id="banner">
        <div class="fp-tablecell">
            <div class="banner">
                <div class="nav wow animate__animated animate__swing" data-wow-duration="2s">
                    <h1>lxs-Blog</h1>
                    <p>只要朝着一个方向努力，一切都会变得得心应手</p>
                </div>
                <lay-icon type="layui-icon-down" class="next wow animate__animated animate__zoomIn" data-wow-duration="2s" @click="scrollToNextSection"></lay-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerHome',
    setup() {
        const scrollToNextSection = () => {
            // 滚动到第二屏的位置
            const nextSectionPosition = window.innerHeight;
            window.scrollTo({
                top: nextSectionPosition,
                behavior: 'smooth'
            });
        }
        return {
            scrollToNextSection
        };
    }
}
</script>

<style scoped>
.banCommon{overflow:hidden;display:table;table-layout:fixed;width:100%;position:relative;padding:100px 0}
.fp-tablecell{display:table-cell;vertical-align:middle;width:100%;height:100%;position:relative;z-index:1}
#banner{height: 100vh;padding: 0;background-color: rgba(0, 0, 0, 0.3);background-position: center;background-attachment: fixed;background-repeat: no-repeat;}
.banner .nav{text-align:center;color:#FFF}
.banner p{letter-spacing:10px;margin:20px 0}
.banner .next{display:block;width:50px;height:50px;border-radius:50%;position:absolute;bottom:30px;left:50%;margin-left:-25px !important;z-index:0;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;cursor:pointer}
.banner .next:hover{-webkit-animation:nextanimation 1s linear;animation:nextanimation 1s linear;background-color:#6bc30d}
.banner .next:before{color:#fff;font-size:3rem;display:table;margin:0 auto}
</style>