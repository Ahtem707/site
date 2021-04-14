<template>
  <v-app>
      <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      aunt: false,
    }
  },
  beforeCreate(){
    if(this.aunt){
      // this.$router.push('/administrator/signIn')
    }
  }
};
</script>