<template>
    <div class="other-item" id="categoryandsearch" :class="{ fixed: isFixed }">
        <div class="search">
            <label class="search-wrap">
                <input type="text" id="searchtxt" placeholder="输入关键字搜索" v-model="searchText" @input="updateSearchResults" />
                <span class="search-icon" @click="clearSearch">
                    <i class="fa fa-search" :class="{ 'fa-times': searchText.length > 0 }"></i>
                </span>
            </label>
            <ul class="search-result" v-if="showSearchResults">
                <!-- 假设这里会动态渲染搜索结果 -->
                <li v-for="(result, index) in searchResults" :key="index">
                    {{ result }}
                </li>
            </ul>
        </div>
        <ul class="category mt20" id="category">
            <li data-index="0" class="slider" :style="{ top: sliderTop + 'px' }"></li>
            <li v-for="(category, index) in categories" :key="category.id" 
                @mouseover="handleCategoryHover(index)" @mouseleave="handleCategoryLeave">
                <a :href="category.href">{{ category.name }}</a>
            </li>
        </ul>
    </div>
    <!--右边悬浮 平板或手机设备显示-->
    <div class="category-toggle" @click="toggleCategory"><i class="layui-icon">&#xe603;</i></div>
    <div class="article-category" v-show="isCategoryVisible">
        <div class="article-category-title">分类导航</div>
            <a v-for="category in categories" :key="category.id" :href="category.href">{{ category.name }}</a>
        <div class="f-cb"></div>
    </div>
    <div class="blog-mask" v-show="isCategoryVisible" @click="toggleCategory"></div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
// 防抖函数实现
function debounce(func, wait) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, wait);
  };
}
export default {
    name: 'CateCommon',
    setup() {
        const searchText = ref('');
        const searchResults = ref([]); // 假设这是从某处获取的搜索结果

        const showSearchResults = computed(() => searchText.value.length > 0);
        const sliderTop = ref(0);
        const isFixed = ref(false);
        const isCategoryVisible = ref(false);
        const categories = ref([
            { id: 1, name: '全部文章', href: '/Blog/Article', index: 1 },
            { id: 2, name: '技术分享', href: '/Blog/Tech', index: 2 },
            { id: 3, name: '生活随笔', href: '/Blog/Life', index: 3 },
            // ... 其他类别
        ]);

        const handleCategoryHover = (index) => {
            sliderTop.value = (index) * 40;
        };

        const handleCategoryLeave = () => {
            sliderTop.value = 0; // 或者你可能想要设置回初始位置，或者一个默认值
        };

        const toggleCategory = () => {
            isCategoryVisible.value = !isCategoryVisible.value;
        };

        const updateSearchResults = () => {
        // 这里可以添加搜索逻辑来更新 searchResults
            searchResults.value = [
                // 假设的搜索结果
                '搜索结果1',
                '搜索结果2',
                // ...
            ];
        };

        // 优化搜索性能，使用防抖
        const updateSearchResultsDebounced = debounce(updateSearchResults, 300);
        const handleInputChange = () => {
            updateSearchResultsDebounced();
        };

        const handleScroll = () => {
            isFixed.value = window.scrollY > 750;
        };
        const clearSearch = () => {
            searchText.value = '';
            searchResults.value = []; // 清空搜索结果
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);

            // 清理资源
            onUnmounted(() => {
                window.removeEventListener('scroll', handleScroll);
            });

            // 初始化搜索结果（如果需要）
            updateSearchResults();
        });

        // 返回响应式数据和函数给模板
        return {
            searchText,
            handleInputChange,
            searchResults,
            showSearchResults,
            sliderTop,
            isFixed,
            isCategoryVisible,
            categories,
            handleCategoryHover,
            handleCategoryLeave,
            toggleCategory,
            clearSearch
        };
    }
}
</script>

<style scoped>
.col-other .other-item{position:relative;background-color:#fff;margin-top:20px;overflow:hidden}
.col-other .other-item .search{padding:20px;background-color:grey;position:relative}
.col-other .other-item .search .search-wrap{display:block;height:40px;padding:0 20px;background-color:#fff;border-radius:40px;position:relative;z-index:5}
.search .search-wrap input{border:none;height:40px;line-height:40px;width:100%;box-shadow:none;background-color:transparent}
.search .search-wrap .search-icon{font-size:18px;position:absolute;width:30px;height:30px;line-height:30px;text-align:center;right:5px;top:5px;color:#787977;-webkit-transition:all .3s;transition:all .3s;cursor:pointer}
.search .search-wrap .search-icon:hover{color:#6bc30d}
.search .search-wrap .search-icon .icon-search:before{content:"\f002"}
.search .search-result{position:absolute;top:40px;left:20px;right:20px;padding-top:30px;padding-bottom:20px;z-index:3;display:none;background-color:#fff;max-height:280px;overflow-y:auto;border:1px solid #e8e9e7;border-bottom-left-radius:10px;border-bottom-right-radius:10px}
.search-result li a{padding:10px}
.search-result li a:hover{background:#eaeaea}
.col-other .other-item .category{position:relative;padding-bottom:20px}
.col-other .other-item .category li{display:block;height:40px;line-height:39px;position:relative;z-index:1}
.other-item .category li.slider{border-right:6px solid #484947;height:40px;background-color:#f8f9f7;position:absolute;top:0;left:0;right:0;z-index:0;transition:top .3s}
.other-item .category li.child a{padding:0 50px;font-size:12px}
.other-item .category li a{display:block;margin:0 30px;padding:0 20px;height:39px;border-bottom:1px solid #f8f9f7;transition:none;text-decoration:none;color:#787977}
 #categoryandsearch.fixed{position:fixed;top:auto;width:300px;margin-top:0;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:bounceInDown;animation-name:bounceInDown}
.other-item-title{margin:10px 20px;padding:5px;line-height:30px;font-weight:400;border-bottom:1px solid #e8e9e7;color:#383937;position:relative;font-size:18px}
.other-item .tags{margin:10px 15px}
.other-item .tags a{display:inline-block;margin:5px 5px}
.other-item .inner{margin:0 20px;padding-bottom:10px}
.other-item .inner .hot-list-article li{display:block;line-height:32px;position:relative;margin:3px 0;counter-increment:nums;padding-left:30px;overflow:hidden;word-wrap:normal!important;white-space:nowrap;text-overflow:ellipsis}
.article-category{position:fixed;top:60px;right:0;bottom:0;background:#393D49;color:#eee;width:160px;font-size:11px;padding:10px;margin:0;display:none;z-index:9}
.article-category>.article-category-title{text-align:center;border-bottom:1px solid #009688;font-size:15px;font-weight:500;padding:0 0 5px 0;margin-bottom:5px}
.article-category>a{display:block;color:#eee;padding:5px 1%;margin:4px 0;background:#009688;width:98%;text-align:center;line-height:19px;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;float:left}
.article-category>a:hover{background:#5FB878}
.blog-mask{position:fixed;left:0;right:0;top:60px;bottom:0;background:rgba(0,0,0,.7);z-index:8}
.category-toggle{position:fixed;right:0;top:40%;width:15px;background:#009688;color:#fff;font-size:16px;padding:30px 0;z-index:9999}
@media screen and (max-width: 1024px) {
    .f-qq, .f-qzone {
        display: none;
    }
    #categoryandsearch {
        display: none;
        position: initial;
        animation: none;
        -webkit-animation: none;
        transform: none;
        -webkit-transform: none;
        width: 100%;
        margin-top: 20px;
    }
    .article-category,
    .blog-mask,
    .category-toggle {
        display: block;
    }
    .blog-mask {
        height: calc(100vh - 60px); /* 减去顶部空间 */
    }
}

@media screen and (min-width: 1025px) {
    .category-toggle,
    .article-category,
    .blog-mask {
        display: none !important;
    }
}
</style>