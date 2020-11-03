<template>
<div class="map-container">
     <div id="map" style="width:100%; height:100%; position:fixed;"></div>  
</div> 
</template>

<script>
export default {
    mounted() {
        this.ymaps.ready(this.createMap());
    },
    data:() => ({
        ymaps: window.ymaps,                              
        clusterer: null,
        map: null,  
        center: [55.76, 37.64],
    }),
    props: {
        zoom: {
            type: Number,
            required: true,
        },
        dots: {
            type: Array,
            required: true,
        }
    },
    methods: {
        createMap(){
            setTimeout(() => { 
                this.map = new this.ymaps.Map("map", {center: this.center, zoom: this.zoom}, {searchControlProvider: 'yandex#search'});
                this.clusterer = new this.ymaps.Clusterer({clusterDisableClickZoom: true});
                
                this.clusterer = new this.ymaps.Clusterer({clusterDisableClickZoom: true});

                this.dots.forEach(dot => {
                                                let placeMark = new this.ymaps.Placemark([dot.long, dot.lat], 
                                                                                        {
                                                                                             balloonContentBody: '<img width="240" height="150" src="' + 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' +'" alt="альтернативный текст"> <p>Цена за комнату: ' + dot.price + ' р. <br>Средняя цена за спальное место: ' + dot.avr_proce + ' р. </p> <p> Отличная комната, расположенная на солнечной стороне дома. </p>',
                                                                                            clusterCaption: dot.address,
                                                                                        });
                                                this.clusterer.add(placeMark);
                                            });
                                            this.map.geoObjects.add(this.clusterer);
                                            }, 1000)
        },
    },   
}
</script>

<style>
.map-container{
    background-color: #ffff;
}
</style>