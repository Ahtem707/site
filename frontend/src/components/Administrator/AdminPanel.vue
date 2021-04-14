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
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color="blue">
      <v-app-bar-nav-icon @click="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <h3>Administrator panel</h3>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link of links"
          :key="link.title"
          :to="link.url"
          text>
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
            links: [
                {
                    title: "Users",
                    url: "/administrator/users"
                },
                {
                    title: "Books",
                    url: "/administrator/books"
                },
                {
                    title: "Cycleworks",
                    url: "/administrator/cycleworks"
                },
                {
                    title: "Genre",
                    url: "/administrator/genre"
                },
                {
                    title: "Achievement",
                    url: "/administrator/achievement"
                },
                {
                    title: "Award",
                    url: "/administrator/award"
                },
                {
                    title: "Status reading",
                    url: "/administrator/statusreading"
                },
                {
                    title: "Status writing",
                    url: "/administrator/statuswriting"
                },
                {
                    title: "Exit",
                    url: "../"
                },
            ]
        }
    }
  // beforeCreate: function () {
  //   const session = true;
  //   if (session) {
  //     this.$router.push("../");
  //   }
  // },
};
</script>