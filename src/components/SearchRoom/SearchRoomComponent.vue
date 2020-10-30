<template>
<div class="container-xxl">
     <div id="map" style="min-width: 600px; min-height: 800px"></div>   
</div>
</template>

<script lang="ts">
import axios from 'axios';
export default {
    mounted(){
    },
    created() {
        this.ymaps.ready(this.init);
    },
    data:() => ({
        self: this,
        ymaps: window.ymaps,                                // ошибки нет
        backUrlLocal: "http://127.0.0.1:80/api/",
        backUrlProd: "http://185.251.91.134/api/",
        map: null,  
        zoom: 12,
        center: [55.76, 37.64],

        rooms: [],
    }),
    methods: {
        async init() {
            await this.getDataFromApi()
            await this.createMap();
            this.setDots();
        },
        async createMap() {
            this.map = new this.ymaps.Map("map", {
                                                    center: this.center, 
                                                    zoom: this.zoom
                                            });
            console.log("Создал карту")
        },
        async getDataFromApi() {
            await axios
                .get(this.backUrlLocal+'rooms/map')
                .then((response) => {
                    this.rooms = response.data.result;
                })
                .catch((error) => {
                        console.log(error.response);   
                });

            console.log("Получил данные ");
        },
    
        setDots() {
            this.rooms.forEach(room => {
                this.map.geoObjects.add(new this.ymaps.Placemark([room.long, room.lat], {
                    }, {
                        preset: 'islands#blueCircleDotIconWithCaption',
                 })); 
            });
        }
    },
}
</script>

<style>
</style>