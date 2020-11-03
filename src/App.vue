<template>
  <v-app>
      <HeaderComponent/>
      <v-main class="main">
        <router-view>Router</router-view>
      </v-main>

    <v-footer>
      <span>&copy; 2020 Nedocigan</span>
    </v-footer>
  </v-app>
</template>

<script>

import HeaderComponent from '@/components/Header/HeaderComponent'
export default {
  name: 'App',
  components: {
    HeaderComponent
  },

  data: () => ({
    //
  }),
};
</script>


<style scoped lang="scss">
.main{
  margin-top: 60px;
}
</style>