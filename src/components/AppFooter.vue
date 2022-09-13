<script>
import feather from 'feather-icons'

export default {
    name: 'AppFooter',
    setup() {
        return {feather}
    },
    data() {
        return {
            mobileViewPortHeight: document.documentElement.scrollHeight
        }
    },
    mounted() {window.addEventListener('resize', () => {this.mobileViewPortHeight = document.documentElement.scrollHeight})},
    unmounted() {window.removeEventListener('resize', () => {this.mobileViewPortHeight = document.documentElement.scrollHeight})},
}
</script>

<template>
    <div class="component-app-footer" :style="`top: ${mobileViewPortHeight - 60}px`">
        <div class="footer-item-wrapper">
            <div class="footer-item">
                <svg v-html="feather.icons.home.toSvg()"></svg>
            </div>
            <div class="footer-item">
                <svg v-html="feather.icons.sliders.toSvg()"></svg>
            </div>
            <div class="footer-item">
                <svg v-html="feather.icons.settings.toSvg()"></svg>
            </div>
            <!-- <div class="footer-item" @click="this.$emit('toggle-search-bar')"> -->
                <div class="footer-item" @click="this.$el.$parent">
                <svg v-html="feather.icons.search.toSvg()"></svg>
            </div>
            <div class="footer-item item-create">
                <svg v-html="feather.icons['plus-circle'].toSvg()"></svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .component-app-footer {
        position: fixed;
        left: 0;
        height: 60px;
        width: 100vw;
        border-top: 2px solid #5C8;
    }
    .footer-item-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: stretch;
        align-items: stretch;
    }
    .footer-item {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footer-item svg {
        width: 24px;
        height: 24px;
    }
    .footer-item:hover {
        background: #EFE;
    }
    .item-create {
        color: white;
        background: #5C8;
    }
    .item-create:hover {
        background: #5D8;
    }
</style>