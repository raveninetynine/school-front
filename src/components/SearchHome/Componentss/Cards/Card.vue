<template>
<div class="container middle">
  <div class="card-mb-3"  v-for="(card, index) of cards " :key="index">
    <div class="row g-0">
      <div class="col-md-4 ">
        <img class="w-100" src="https://avatars.mds.yandex.net/get-zen_doc/248942/pub_5ad735c1fd96b1aa260a5452_5ad73609d7bf210ca2854682/scale_1200"  alt="HATA1">
      </div>
      <div class="col-md-6 ">
        <div class="card-body">
          <h5 class="card-title">{{card.metro}}</h5>
          <p class="card-text">{{card.address}}</p>
          <p class="card-text">этаж {{card.floor}}/{{card.floor_total}}</p>
          <p class="card-text"><small class="text-muted">{{card.metro}}</small></p>
        </div>
      </div>
      <div class="col-md-2 lol">
        <div class="size">
        <label class="texxxt">Свободно</label><br>
        <button class="eye1 first">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-slash" fill="Red" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
              <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709z"/>
              <path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"/>
            </svg>
          </button>
          </div>
          <div class="size">
        <button class="eye2 second">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="orange" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
            </svg>
          </button>
          </div>
          <div class="size">
        <button class="eye3 thrid">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
          </button>
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
.texxxt {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    align-items: center;
    color: #000000;
    margin-top: 20px;
    margin-right: 21px;
  }
.card-mb-3 {
    height: 320px;
    width: 1100px;
    background: #FFFFFF;
    border-radius: 20px;
    border-style: solid;
    border-color: rgba(81, 45, 228, 1);
    margin-bottom: 15px;
}
.middle {
    text-align: left;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    padding: 0px;  
  }
  .card-body {
    text-align: left;
  }
  .w-100 {
    width: 385px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .eye1 {
    background: #FFFFFF;
    border: 2px solid #B2B2B2;
    box-sizing: border-box;
    height: 36px;
    width: 36px;
    left: 0px;
    top: 0px;
    border-radius: 50px;
    margin-right: 21px;
  }
  .eye2 {
    background: #FFFFFF;
    border: 2px solid #B2B2B2;
    box-sizing: border-box;
    height: 36px;
    width: 36px;
    left: 0px;
    top: 0px;
    border-radius: 50px;
    margin-right: 21px;
  }
  .eye3 {
    background: #FFFFFF;
    border: 2px solid #B2B2B2;
    box-sizing: border-box;
    border-radius: 50px;
    height: 82px;
    width: 80px;
    margin-right: 21px;
  }

  .lol{
    padding: 0px;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-end;
  }
  .size {
    margin-right:10px

  }
  .first {
    margin-top: 21px;
    margin-bottom: 16px;
  }
  .second {
    margin-bottom: 16px;
  }
  .bi-eye-slash {
    color: rgba(227, 62, 51, 1);
    height: 13.860000610351562px;
    width: 15.840002059936523px;
  }
  .bi-envelope {
    height: 14px;
    width: 15px;
    border-radius: 0px;

  }
</style>