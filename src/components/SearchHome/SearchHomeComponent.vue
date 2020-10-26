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
  <div class="SearchHome">
        <h1>...</h1>
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
      this.testAPI();
    },
    methods: {
             testAPI() {
              const headers ={
                      'Content-Type': 'application/x-www-form-urlencoded',
                  }
              axios
              .get(this.backUrlProd+'/lot', {headers:headers})
              .then(response => (console.log(response.data)))
              .catch((error) => {
                    console.log(error.response);
                    
                });

            }
    },
    data:() => ({

      backUrlLocal: "http://127.0.0.1:80/api/",
      backUrlProd: "http://185.251.91.134/api",
      items: [
          {
            title:"Хата Вани Лапшина",
            text:"Голова члена",
            text_muted:"ОЛулаоуцлоащшцрущшарощйшуоащйшуоащшйцоаущзшцйоуащзшоцйузщшаолзщцшукоащзшцфыуоупщшцуорпщ0зшцуопщзшцйопщшцйопщшйцопщзйцпощзйпойщзпшо"
          },
          {
            title:"Моя хата",
            text:"Запасной план",
            text_muted:"0.5 эло"
          },
          {
            title:"Хата Сани Схемова",
            text:"КСАНТАРЕС ПИК",
            text_muted:"778878787 эло"
          }
      ],
    
    }),
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