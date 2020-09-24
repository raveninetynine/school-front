<template>
<div class="header">
    <nav>
        <div class="menu-logo"><img class="HeaderLogo" src="https://i.otzovik.com/objects/b/10000/7082.png" alt=""></div>
        <div class="menu-item" @mouseenter='isOpen=true' @mouseleave='isOpen=false'><a href="">Аренда</a></div>
        <div class="menu-item"><a href="">Карта</a></div>
        <div class="menu-item"><a href="">Поиск соседа</a></div>
        <v-spacer/>
        <div class="menu-item" id="HeaderIcon"><v-icon >{{ svgHeart }}</v-icon></div>
        <div class="menu-item" id="HeaderIcon"><v-icon >{{ svgBell }}</v-icon></div>
        <div class="menu-item" id="HeaderPost"><a class="PostLink" href="">+ Разместить объявление</a></div>
        <div class="menu-item" id="HeaderSignIn"><a class="SignLink" href="">Войти</a></div>

    </nav>
    <div class='sub-menu' v-if="isOpen" @mouseenter='isOpen=true' @mouseleave='isOpen=false'>
    <div class="sub-menu-container" ><li v-for="i in services" :key="i.title">{{i.title}}</li></div>
    <ul>
        <li v-for="(test,index) in test_req" :key="index">
            {{ test_req }}
        </li>
    </ul>
    </div>
</div>
</template>

<script>
    import axios from 'axios';
    import { mdiHeartOutline, mdiBellOutline } from '@mdi/js';
    export default {
        components: {
            
    
        },
        data: () => ({
            isOpen: false,
            test_req: [],
            services: [
                {
                    title: 'Квартиры',
                    link: '#'
                },
                {
                    title: 'Комнаты',
                    link: '#'
                },
                {
                    title: 'Дома и коттеджи',
                    link: '#'
                }
            ],
            svgHeart: mdiHeartOutline,
            svgBell: mdiBellOutline
        }),

        mounted() {
            axios
            .get('http://185.251.91.134/api')
            .then(response => this.test_req = response.data)
        }
        
    }
</script>

<style scoped lang="scss">
    nav {
        background: '#FFFFFF';
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        border: .1px solid #EEEEEE;

    }

    .HeaderLogo {
        object-fit: contain;
        width: 40%;
    }

    #HeaderIcon {
        cursor: pointer;
    }


    nav .menu-logo {
        text-align: center;
        padding-bottom: 0px;
    }
    nav .menu-item {
        color: black;
        padding: 20px 20px;
        position: relative;
        text-align: center;
        border-bottom: 3px solid transparent;
        display: flex;
        transition: 0.4s;
        height: 100%;
    }

    nav .menu-item.active,
    nav .menu-item:hover {
        border-bottom-color: #0000ff;
    }

    nav .menu-item a {
        text-decoration: none;
        color: inherit;
    }

    #HeaderSignIn {
        margin-right: 250px;
    }

    #HeaderSignIn.menu-item.active,
    #HeaderSignIn.menu-item:hover {
        border-bottom-color: transparent;
    }
    #HeaderPost.menu-item.active,
    #HeaderPost.menu-item:hover {
        border-bottom-color: transparent;
    }

    #HeaderIcon.menu-item.active,
    #HeaderIcon.menu-item:hover {
        border-bottom-color: transparent;
    }

    .sub-menu-container {
        padding-top: 10px;
        margin-left: 250px;
        width:max-content;
        
    }

    .sub-menu-container li {
        list-style: none;
        margin-top: 10px;
        font-weight: bold;
    }

    .sub-menu {
        border: .5px solid  #EEEEEE;
    }

    .PostLink {
        
        height: 25px;
        width: 210px;
        border-radius: 5px;
        background-color: blue;
        color: white !important;
    }

    .SignLink {
        height: 25px;
        width: 70px;
        border-radius: 5px;
        background-color: blue;
        color: white !important;
    }
</style>