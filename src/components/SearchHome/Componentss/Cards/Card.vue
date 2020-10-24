<template>
<div>
  <div class="card mb-3" style="max-width: 100%;" v-for="(card, index) of cards " :key="index">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="w-100" src="https://avatars.mds.yandex.net/get-zen_doc/248942/pub_5ad735c1fd96b1aa260a5452_5ad73609d7bf210ca2854682/scale_1200"  alt="HATA1">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{card.title}}</h5>
          <p class="card-text">{{card.text}}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur expedita molestiae ut voluptates voluptate rem, officiis sit quam nam accusantium quidem debitis porro libero quod voluptatum adipisci quia autem. Commodi vitae natus at quia inventore quam ex ab perspiciatis?</p>
          <p class="card-text"><small class="text-muted">{{card.text_muted}}</small></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data:() => ({
    }),
    props: {
            cards: {
                  type: Array,
                  }
    }     
}
</script>

<style>

</style>