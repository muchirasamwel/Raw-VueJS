<template>
    <div>
        <nav-bar></nav-bar>
        <div id="content">
            <router-view />
        </div>
    </div>
</template>
<style>
    h1 {
        color: white;
    }
</style>
<script lang="js">
    import home from './views/home.vue'
    export default {
        components:{
            home
        }
    }
</script>