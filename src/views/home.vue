<template>
    <div class="home-container">
        <div class="my-logo">

        </div>
        <div class="home-content">
            <h1>Welcome Home</h1>
            <p>Look Closely</p>
            <h2 class="welc"><span class="h1"> Happy </span><span class="h2"> New </span> Year </h2>
        </div>
<!--        <div class="fndiv">-->
<!--            Fun div-->
<!--        </div>-->

    </div>
</template>
<style lang="scss" >
    .welc{
        font-size: 2.2em;
        font-weight: bolder;
        &:hover{
            cursor: pointer;
            animation: grow;
            animation-duration: 2s;
            animation-timing-function: linear;
            text-shadow: 0px 0px 0px black; font-size: 2.4em;
        }
    }
    h2 {
        .h1 {
            color: white;
        }

        .h2 {
            color: cyan;
        }
    }
    @keyframes grow {
        0% {text-shadow: 0px 0px 0px black; font-size: 2.4em}
        17% {text-shadow: 1px 1px 2px black; font-size: 2.8em}
        36% {text-shadow: 2px 2px 4px black; font-size: 3.2em}
        50% {text-shadow: 3px 3px 6px black; font-size: 3.6em}
        68% {text-shadow: 2px 2px 4px black; font-size: 3.2em}
        84% {text-shadow: 1px 1px 2px black; font-size: 2.8em}
        100% {text-shadow: 0px 0px 0px black; font-size: 2.4em}

    }
</style>