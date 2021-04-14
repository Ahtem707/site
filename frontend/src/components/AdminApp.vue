<template>
  <v-app>
      <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  beforeCreate(){
    if(this.$store.getters.isLoggedIn){
      // this.$router.push('/administrator/signIn')
    }
  }
};
</script>