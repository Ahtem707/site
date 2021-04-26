<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item
            v-for="link of links"
            :key="link.title"
            :href="link.url">
            <v-list-item-title>{{link.title}}</v-list-item-title>
            <v-icon left>{{link.icon}}</v-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color="blue">
      <v-app-bar-nav-icon @click="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link v-slot="{ navigate }" custom to="/" class="pointer">
          <h2 @click="navigate" role="link" class="mb-0">LiberFic</h2>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link of links"
          :key="link.title"
          :to="link.url"
          style="text-decoration: none"
          text>
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      login: true,
    }
  },
  computed: {
    links: function(){
      if(this.login){
        return [
          // {title:'Orders', icon: 'mdi-briefcase-download-outline', url: '/orders'},
          {title:'Домой', icon: 'home', url: '/'},
          {title:'Созать книгу', icon: 'mdi-plus-circle', url: '/newbook'},
          {title:'Мои книги', icon: 'mdi-briefcase-plus', url: '/mybooks'},
          {title:'Exit', icon: 'mdi-exit-run', url: '/exit'},
        ]
      }
      else {
        return [
          {title:'Домой', icon: 'home', url: '/'},
          {title:'Войти', icon: 'mdi-login', url: '/login'},
          {title:'Зарегистрироваться', icon: 'mdi-account', url: '/registration'},
        ]
      }
    },
  }
}
</script>

<style scoped>
  .pointer{
    cursor: pointer;
  }
</style>