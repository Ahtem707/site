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
      <tr v-for="user in users" :key="user.idUsers">
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
        <td>{{user.createTime}}</td>
        <td>{{user.lastEntry}}</td>
        <td>{{user.reputation}}</td>
        <td><v-btn @click="deleteUser(user.idUsers)"><v-icon>delete</v-icon></v-btn></td>
      </tr>
        </tbody>
    </table>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const response = await axios.post(this.serverPath+"/administrator", {
          session: true,
          method: 'showUsers',
          arguments: {
            order_by: 'username'
          }
        });
        this.users = response.data
      } catch (err) {
        console.log(err);
      }
    },
    async deleteUser(id) {
      console.log(id)
      try {
        await axios.post(this.serverPath+"administrator", {
          session: true,
          method: 'deleteUser',
          arguments: {
            idUser: id
          }
        });
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