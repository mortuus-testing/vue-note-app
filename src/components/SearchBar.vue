<script>
import feather from 'feather-icons' 

export default {
    name: 'SearchBar',
    setup() {
        return {feather}
    },
    data() {
        return {
            isShowed: false
        }
    },
    methods: {
        toggle() {
            alert('component-toggled')
            this.isShowed = !this.isShowed
            // if (this.isShowed) {this.$el.querySelector('.search-input').focus()}
        }
    }
}
</script>

<template>
    <div class="component-search-bar" :class="this.isShowed ? '' : 'hide'">
        <div class="search-bar-wrapper">
            <div class="search-icon">
                <svg v-html="feather.icons.search.toSvg()"></svg>
            </div>
            <input type="text" class="search-input" placeholder="Search notes...">
        </div>
    </div>
</template>

<style scoped>
    .component-search-bar {
        width: 100vw;
        height: 60px;
        transform: translateY(0);
        background: #5C8;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s ease-in-out;
    }
    .hide {
        transform: translateY(-60px);
    }
    .search-bar-wrapper {
        height: 50px;
        width: 80%;
        max-width: 800px;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search-icon {
        color: #333;
        background: white;
        min-width: 50px;
        min-height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search-icon svg {
        width: 24px;
        height: 24px;
    }
    .search-input {
        height: 50px;
        width: 100%;
        flex-grow: 1;
        padding: 0 10px;
        font-size: 18px;
        color: #333;
        border: none;
        background: white;
    }
    .search-input:focus {
        outline: none;
    }
</style>