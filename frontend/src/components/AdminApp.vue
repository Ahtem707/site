<template>
  <v-app>
      <router-view></router-view>
    <template v-if="error">
      <v-snackbar
      :timeout="5000"
      :multi-line="true"
      color="error"
      @input="closeError"
      value="true">
        {{error}}
        <v-btn flat dark @click.native="closeError">Close</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      loggin: true
    }
  },
  computed: {
    error () {
      return this.$store.getters.adminError
    },
  },
  methods: {
    closeError () {
      this.$store.dispatch('adminClearError')
    }
  },
  created(){
    if(!this.$store.getters.adminIsUserLoggedIn){
      this.$router.push('/administrator/signIn')
    }
  }
};
</script>