<template>
    <div class="nav-bar">
        <div class="nav-center">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li class="d"></li>
                <li><router-link to="/about">About</router-link></li>
                <li class="d"></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" >
    @mixin center-content{
        display: flex;
        justify-content: center;
    }
    .nav-bar {
        background-color: black;
        color: white;
    }
    .nav-center {
        @include center-content;
        margin-bottom:10px;
        ul{
            text-align: center;
            display: inline;
            li{
                margin: 10px;
                display: inline;
                a{
                    text-decoration: none;
                    color: white;
                    &:hover{
                        font-size: 1.2em;
                        font-weight: bolder;
                        color: red;
                    }
                }
            }
            .d{
                border-left: 2px solid white;
            }

        }
    }
</style>