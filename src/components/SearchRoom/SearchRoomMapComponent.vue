<template>
<div class="container--fluid red">
    <div class="map-container">
        <mapComponent :zoom=10 :dots="rooms" />
    </div> 
</div>
</template>

<script lang="ts">
import mapComponent from "./components/map/mapComponent";
import axios from 'axios';
export default {
    components: {
        mapComponent
    },
    mounted(){
    },
    created(){
        this.getDataFromApi(1, this.limit);
    },
    data:() => ({
        backUrlLocal: "http://127.0.0.1:80/api/",
        backUrlProd: "http://185.251.91.134/api/",
        limit: 1000,
        rooms: [],
    }),
    methods: {
        async getDataFromApi(off, lim) {
            await axios
                .get(this.backUrlProd+'rooms', {
                    params: {
                        offset: off,
                        limit: lim,
                    }
                })
                .then((response) => {
                    this.rooms = response.data.result.data;
                    console.log(this.rooms);
                })
                .catch((error) => {
                        console.log(error.response);   
                });
        },
    },
}
</script>

<style>
.red{
    background-color: red;
}
.map-container{
    height: 100vh;
    width: 100vw;
}
</style>