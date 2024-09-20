<template>
    <div class="header-fixed">
        <div class="navigation">
            <!-- 网站logo -->
            <a href="javascript:void(0)" class="header-logo" id="logo">Mr.liu</a>
            <!-- 导航菜单 -->
            <nav class="nav" id="nav">
                <ul>
                    <!-- 动态生成导航菜单项 -->
                    <li v-for="item in navItems" :key="item.href" :class="{ 'current': isActive(item.href) }"
                        @mouseenter="setActive(item.href)" @mouseleave="removeActive(item.href)">
                        <a :href="item.href">{{ item.text }}</a>
                    </li>
                </ul>
            </nav>
            <!-- QQ登录按钮 -->
            <a href="#" class="blog-user">
                <lay-icon type="layui-icon-search"></lay-icon>
            </a>
            <!-- 手机菜单按钮 -->
            <a class="phone-menu" @click="toggleNavMenu">
                <i></i>
                <i></i>
                <i></i>
            </a>
        </div>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue';

export default {
    name: 'NavCommon',
    setup() {
        // 导航菜单项数据
        const navItems = ref([
            {href: 'index.html', text: '首页'},
            {href: '/blog', text: '博客'},
            {href: 'message.html', text: '留言'},
            {href: 'diary.html', text: '日记'},
            {href: 'link.html', text: '友链'},
        ]);
        const activeItem = ref('');
        const tempActiveItem = ref('');

        // 判断菜单项是否激活
        const isActive = (href) => {
            return activeItem.value === href || tempActiveItem.value === href;
        };

        // 设置当前激活的菜单项
        const setActive = (href) => {
            tempActiveItem.value = href;
        };

        // 移除当前激活的菜单项
        const removeActive = (href) => {
            if (window.location.pathname !== href) {
                tempActiveItem.value = '';
            }
        };

        // 切换手机导航菜单的显示状态
        const toggleNavMenu = () => {
            const navMenu = document.getElementById('nav');
            navMenu.style.display = navMenu.style.display === '' || navMenu.style.display === 'none' ? 'block' : 'none';
        };

        // 组件挂载后，根据当前页面设置激活的菜单项
        onMounted(() => {
            const currentPath = window.location.pathname;
            navItems.value.forEach((item) => {
                if (currentPath.includes(item.href)) {
                    activeItem.value = item.href;
                }
            });
        });

        return {
            navItems,
            activeItem,
            tempActiveItem,
            isActive,
            setActive,
            removeActive,
            toggleNavMenu,
        };
    },
};
</script>

<style scoped>
.header-fixed {
    width: 100%;
    min-height: 60px;
    position: fixed;
    background-color: rgba(255, 255, 255, 1);
    z-index: 11002;
    top: 0;
    left: 0;
    border-bottom: 1px solid #e8e9e7;
    margin-left: 10px;
    margin-right: 10px;
}

.navigation {
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    position: relative
}

.header-logo {
    font-family: BarbaraHand;
    font-size: 40px;
    color: #444647;
    text-align: center;
    position: absolute;
    left: 50px
}

.nav {
    display: block;
    position: absolute;
    right: 15%
}

.nav li {
    display: block;
    float: left;
    margin: 10px 5px;
    position: relative
}

.nav li:before {
    width: 0;
    height: 2px;
    position: absolute;
    bottom: -11px;
    left: 50%;
    background-color: #6bc30d;
    content: "";
    transition: all .6s;
    z-index: -1
}

.nav li a {
    display: block;
    line-height: 32px;
    padding: 4px 28px;
    color: #212220;
    font-weight: 400;
    font-size: 15px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, .2);
    -webkit-transition: all .2s;
    transition: all .2s
}

.nav .current:before {
    width: 100%;
    left: 0
}

.nav .current a {
    color: #6bc30d
}

.blog-user {
    position: absolute;
    line-height: 60px;
    font-size: 24px
}

.blog-user > img {
    border-radius: 50%;
    width: 40px;
    height: 40px
}

.phone-menu {
    width: 50px;
    height: 50px;
    display: inline-block;
    position: absolute;
    cursor: pointer;
    right: 0;
    top: 5px
}

.phone-menu i {
    background: #787977;
    display: inline-block;
    width: 22px;
    height: 2px;
    position: absolute;
    left: 14px
}

.phone-menu i:nth-of-type(1) {
    top: 18px
}

.phone-menu i:nth-of-type(2) {
    top: 25px
}

.phone-menu i:nth-of-type(3) {
    top: 32px
}

@media screen and (min-width: 1025px) {
    .blog-user {
        right: 0
    }

    .phone-menu {
        display: none
    }

    .nav {
        display: block !important
    }
}

@media screen and (max-width: 1366px) {
    .navigation {
        width: 90%
    }

    .phone-menu {
        display: none
    }

    .nav {
        display: block
    }
}

@media screen and (max-width: 1024px) {
    .navigation {
        width: 90%
    }

    .header-logo {
        left: 25%;
        width: 50%
    }

    .nav {
        position: fixed;
        top: 60px;
        left: 0;
        right: 0
    }

    .phone-menu {
        display: block
    }

    .nav {
        display: none;
        width: 100%;
        background: rgba(255, 255, 255, 1)
    }

    .nav li:before {
        bottom: 0;
        z-index: 10
    }

    .nav li {
        float: none;
        border-bottom: 1px solid #e8e9e7
    }

    .nav li:last-child {
        border: 0
    }
}
</style>