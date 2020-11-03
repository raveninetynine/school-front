<template>
<div class="container-fluid">
    <div class="row">
        <div v-bind:class='classListContent'>
            <div class="row top-bar">
                <div class="filters">
                    Фильтры
                </div>
                <div>
                    <button type="button" @click="isMapVisible = !isMapVisible" class="btn btn-outline-primary">{{btnText}}</button>
                </div>
            </div>
            <div class="row cards">
                <roomCardComponent v-for="room in rooms" v-bind:key="room.id" :room="room"></roomCardComponent>
            </div>
            <div class="row pages">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                    <li class="page-item"><a class="page-link" @click="backStep()">Previous</a></li>
                    <li v-for="n in pageNum" :key="n"><a class="page-link" @click='getDataFromApi(5,n)'>{{n}}</a></li>
                    <li class="page-item"><a class="page-link" @click="nextStep()">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div v-bind:class='mapContent'>
            <mapComponent :zoom=10 :dots="rooms" />
        </div>
    </div>
</div>
</template>

<script>
import mapComponent from './components/map/mapComponent';
import roomCardComponent from './components/roomCard/roomCardComponent';
import axios from 'axios';
export default {
    data: () => ({
        isMapVisible: true,
        classMapContent: "col-6 list-content",
        offset: 1,
        backUrlLocal: "http://127.0.0.1:80/api/",
        backUrlProd: "http://185.251.91.134/api/",
        limit: 10,
        rooms: [],
        pageNum: '',
        curPageNum: '1',
    }),
    components: {
        mapComponent,
        roomCardComponent,
    },
    created(){
        this.getDataFromApi(this.offset, this.limit);
    },
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
                    this.curPageNum = response.data.result.curr_page;
                    this.pageNum = response.data.result.num_pages;
                    console.log(this.rooms[0]);
                })
                .catch((error) => {
                        console.log(error.response);   
                });
        },
        nextStep() {
            if(this.curPageNum < this.pageNum){
                this.curPageNum++;
                this.testAPI(this.itemLimit,this.curPageNum);
            }
        },

        backStep() {
            if(this.curPageNum > 1){
                this.curPageNum--;
                this.testAPI(this.itemLimit,this.curPageNum);
            }
        },
    },
    computed: {
        classListContent: function(){
            if(this.isMapVisible){
                return "col-6 list-content"
            }else{
                return "col-11 list-content"
            }
        },
        mapContent: function(){
            if(this.isMapVisible){
                return "col-6 map-content visible"
            }else{
                return "col-1 map-content invisible"
            }
        },
        btnText: function(){
            if(this.isMapVisible){
                return "Скрыть карту"
            }else{
                return "Открыть карту"
            }
        }
    }

}
</script>

<style>
.top-bar{
    justify-content: space-between;
}
.list-content{
    padding: 50px;
}
.map-content{
    padding: 0;
}
.invisible{
    visibility: hidden;
}
.visible{
    visibility:visible;
}
.cards {
    margin-top: 50px;
    justify-content: space-between;
    align-items: flex-start;
}
.pages{
    margin-top: 50px;
    align-items: center;
}
</style>