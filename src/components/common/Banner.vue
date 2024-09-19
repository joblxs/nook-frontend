<!--横幅-->
<template>
    <div class="banner">
        <!--当前时间-->
        <div id="clock">
            <p class="date">{{ date }}</p>
            <p class="time">{{ time }}</p>
        </div>
        <div class="nav wow animate__animated animate__swing" data-wow-duration="2s">
            <h1>lxs-Blog</h1>
            <p>只要朝着一个方向努力，一切都会变得得心应手</p>
        </div>
        <lay-icon type="layui-icon-down" class="next wow animate__animated animate__zoomIn" data-wow-duration="2s" @click="scrollToNextSection"></lay-icon>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'BannerHome',
    setup() {
        const time = ref('');
        const date = ref('');

        const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

        function updateTime() {
            const cd = new Date();
            time.value = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
            date.value = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
        }

        function zeroPadding(num, digit) {
            return num.toString().padStart(digit, '0');
        }

        let timerID;
        onMounted(() => {
            updateTime();
            timerID = setInterval(updateTime, 1000);
        });

        onUnmounted(() => {
            clearInterval(timerID);
        });

        const scrollToNextSection = () => {
            // 滚动到第二屏的位置
            const nextSectionPosition = window.innerHeight;
            window.scrollTo({
                top: nextSectionPosition,
                behavior: 'smooth'
            });
        }

        return {
            scrollToNextSection, time, date
        };
    }
}
</script>

<style scoped>
#clock {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
}
#clock .time {
    letter-spacing: 0.05em;
    font-size: 80px;
    padding: 5px 0;
}
#clock .date {
    letter-spacing: 0.1em;
    font-size: 24px;
}
.banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
}
.nav {
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
}
.nav h1 {
    font-size: 2.5rem;
}
.nav p {
    font-size: 1rem;
    letter-spacing: 0.5rem;
    margin: 1rem 0;
}
.next {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    transition: all .5s ease-out;
    cursor: pointer;
}
.next:hover {
    background-color: #6bc30d;
}
.next:before {
    font-size: 3rem;
    display: table;
    margin: 0 auto;
}
@media (max-width: 768px) {
    .nav h1 {
        font-size: 2rem;
    }
    .nav p {
        font-size: 0.9rem;
        letter-spacing: 0.3rem;
    }
}
@media (max-width: 480px) {
    .nav h1 {
        font-size: 1.5rem;
    }
    .nav p {
        font-size: 0.8rem;
        letter-spacing: 0.2rem;
    }
}
</style>