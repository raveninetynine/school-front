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
        clusterer: null,
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
                                            }, {
                                                searchControlProvider: 'yandex#search'
                                            });
        
            this.clusterer = new this.ymaps.Clusterer({
                clusterDisableClickZoom: true,
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
                let placeMark = new this.ymaps.Placemark([room.long, room.lat], 
                                                        {
                                                            content: room.address,
                                                            ballonContent: room.address,
                                                            clusterCaption: "Комната №" + room.id
                                                        });
                this.clusterer.add(placeMark);
            });

            this.map.geoObjects.add(this.clusterer);
        }
    },
}
</script>

<style>
</style>