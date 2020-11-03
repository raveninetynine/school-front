<template>
<div class="container-xxl">
    <div class="container">
  <div class="row align-items-center">
    <div class="col middle button">
      <h1>Жильё</h1>
    </div>
    <div class="col middle button">
      <h1>Соседи</h1>
    </div>
  </div>
</div>
<card :cards="items">
</card>
<div class='align-items-center'>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" @click="backStep()">Previous</a></li>
      <li v-for="n in pageNum" :key="n"><a class="page-link" @click='testAPI(5,n)'>{{n}}</a></li>
      <li class="page-item"><a class="page-link" @click="nextStep()">Next</a></li>
    </ul>
  </nav>
</div>
</div>
</template>

<script>
import axios from 'axios';
import card from './Componentss/Cards/Card';
export default {
    components: {
        card
    },
    mounted(){
      this.testAPI(this.itemLimit,this.curPageNum);
    },
     data:() => ({

      backUrlLocal: "http://127.0.0.1:80/api/",
      backUrlProd: "http://185.251.91.134/api/",
      pageNum: '',
      curPageNum: '1',
      itemLimit: '5',
      items: [],
    
    }),
    methods: {
            
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

             testAPI(lim,offs) {
              axios

              .get(this.backUrlLocal+'lot', {
                params: {
                  limit: lim,
                  offset: offs,
                }
              })

              .then((response) => {
                this.curPageNum = response.data.result.curr_page;
                this.pageNum = response.data.result.num_pages;
                this.items = response.data.result.data;
                console.log(this.curPageNum);
              })

              .catch((error) => {
                    console.log(error.response);   
                });

            }
    },
}
</script>

<style>
.middle {
text-align:center
}
.button:hover {
border-bottom: 5px solid blueviolet;
}
</style>