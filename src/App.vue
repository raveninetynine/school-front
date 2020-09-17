<template>
  <v-app>
      <HeaderComponent/>
  </v-app>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent'
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
