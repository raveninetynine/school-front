<template>
  <v-app>
      <HeaderComponent/>
      <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <router-view>Router</router-view>
          </v-col>
        </v-row>
      </v-container>
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
