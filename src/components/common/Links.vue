<template>
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
</template>

<script>
export default {
    name: 'FooterHome'
}
</script>

<style scoped>
.section {
    overflow: hidden;
    display: table;
    table-layout: fixed;
    width: 100%;
    position: relative;
    padding: 100px 0
}

.fp-tablecell {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1
}

#section3 {
    background-image: url(https://images.unsplash.com/photo-1551841462-31a28cf2c601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover
}

#section3:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%; /*background-color:rgba(0,0,0,.5)*/
}

.page3 .inner {
    text-align: center;
}

.page3 .links li {
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
}

.page3 .links li a {
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

.page3 .links li:after {
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

.page3 .links li:hover {
    border-color: #fff;
    color: #fff;
}

.page3 .links li:hover:after {
    width: 100%;
}
</style>