<script setup>
    import feather from 'feather-icons'
</script>

<script>
export default {
    name: 'WelcomeFooter'
}
</script>

<template>
    <div class="component-welcome-footer">
        <div class="author">
            by <span class="author-name">RiENX</span>
        </div>
        <div class="social">
            <div class="social-item">
                <svg v-html="feather.icons.youtube.toSvg()"></svg>
            </div>
            <div class="social-item">
                <svg v-html="feather.icons.github.toSvg()"></svg>
            </div>
            <div class="social-item">
                <svg v-html="feather.icons.twitter.toSvg()"></svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .component-welcome-footer {
        height: 60px;
        width: 100vw;
        position: fixed;
        top: calc(100vh - 60px);
        left: 0;
        background-color: #5C8;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
    }
    .author {
        color: white;
    }
    .author-name {
        font-weight: bold;
        border-bottom: 2px solid transparent;
    }
    .author:hover .author-name {
        border-bottom: 2px solid white;
    }
    .social {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .social-item {
        width: 40px;
        height: 40px;
        border: 2px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }
    .social-item svg {
        width: 24px;
        height: 24px;
        color: white;
    }
    .social-item:hover {
        background: white;
    }
    .social-item:hover svg {
        color: #5C8;
    }

</style>