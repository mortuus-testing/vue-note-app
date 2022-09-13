<script>
export default {
    name: 'WelcomeMain',
    data() {
        return {
            loadingMsg: 'Searching The Orion Constellation...'
        }
    }
}
</script>

<template>
    <div class="component-welcome-main">
        <div class="container">
            <div class="msg-container">
                <div class="hello">Hello</div>
                <ul class="msg-list">
                    <li class="msg">Welcome to my <span class="app-title">Note App</span> project.</li>
                    <li class="msg">This page is just a demo. It's not build on top of a real database. So, it resetted every times you reload the page.</li>
                </ul>
            </div>
            <div class="btn-container">
                <div class="loading-msg">{{loadingMsg}}</div>
                <button class="btn-next">Continue</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .component-welcome-main {
        min-height: calc(100vh - 60px);
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #5C8;
    }
    .container {
        width: 100%;
        max-width: 600px;
        height: 70vh;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }
    .msg-container {
        flex-grow: 2;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .hello {
        font-size: 60px;
        font-weight: bold;
        align-self: center;
        color: #5C8;
        margin-bottom: 20px;
    }
    .msg-list {
        color: #333;
    }
    .msg {
        text-align: justify;
        padding-right: 40px;
    }
    .app-title {
        font-weight: bold;
        border-bottom: 2px solid #5C8;
    }
    .app-title:hover {
        color: white;
        background: #5C8;
    }
    .btn-container {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .loading-msg {
        height: 40px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #5B8;
        font-size: 15px;
    }
    .btn-next {
        padding: 10px 30px;
        font-weight: bold;
        border: 2px solid #333;
        border-radius: 5px;
        background-color: white;
    }
    .btn-next:hover {
        color: white;
        background-color: #333;
    } 
</style>