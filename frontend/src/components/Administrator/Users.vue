<template>
  <v-app class="container">
    <h1>Users</h1>
    <table>
        <thead>
      <tr>
        <th>Имя пользователя</th>
        <th>Почта</th>
        <th>Дата создания аккаунта</th>
        <th>Последний вход</th>
        <th>Репутация</th>
        <th>Команды</th>
      </tr>            
        </thead>
        <tbody>
      <tr v-for="user in users" :key="user.username">
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
        <td>{{user.createTime}}</td>
        <td>{{user.lastEntry}}</td>
        <td>{{user.reputation}}</td>
        <td><v-btn @click="deleteUsers"><v-icon>delete</v-icon></v-btn></td>
      </tr>
        </tbody>
    </table>
  </v-app>
</template>

<script>
// import axios
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    // test
    console.log("created")
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const response = await axios.get(this.serverPatch + "/administrator/users");
        this.users = response.data;
        console.log(this.users)
      } catch (err) {
        console.log(err);
      }
    },
    async deleteUsers(id) {
      try {
        await axios.delete(this.serverPatch + "/administrator/users"+id);
        this.getUsers();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
  .container{
    padding: 0 10px;
  }
  table,th,td {
    border: 2px solid black;
  }
  th,td{
    padding: 0 5px;
  }
  th{
    text-align: center;
  }
</style>