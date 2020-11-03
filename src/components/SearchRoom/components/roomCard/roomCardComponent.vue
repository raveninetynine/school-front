<template>
<v-card
    class="mx-auto mt-5"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="400px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{room.address}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Цена за всю комнату: 15 000{{room.price}} р.
      <br>
      Средняя цена за спальное место: 11 500{{room.avr_price}} р.
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Комната {{room.area}} кв.м</div>
      <div>Расположена в {{room.ttmetro_transport}} минутах езды от метро <i>{{room.metro}}</i></div>
      <div>Жильцы: {{room.curr_number_of_residents}}/{{room.max_residents}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="blue"
        text
      >
        Подробнее ... 
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    data:() => ({
    }),
    props: {
      room: {
              type: Object,
            }
    }     
}
</script>

<style>

</style>