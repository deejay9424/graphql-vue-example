<template>
  <div id="app">
    <h2>
      <u>Vue + GraphQL + MongoDB + NodeJS Examples</u>
    </h2>
    <h3>Example 1</h3>
    <div>Data: {{ example1 }}</div>
    <button @click="getTest">Test</button>
    <hr>

    <h3>Example 2</h3>
    <div>
      Data:
      <ul id="example-2">
        <li v-for="user in users" :key="user.name">{{ user.name }}</li>
      </ul>
    </div>
    <button @click="getUsers">Get Users</button>
    <hr>

    <h3>Example 3</h3>Name:
    <input v-model="name">
    <div>
      Data:
      {{ user }}
    </div>
    <button @click="getUserByName">Get User</button>
    <hr>
    <h3>Example 4</h3>Name:
    <input v-model="name">
    Age:
    <input v-model.number="age">
    <div>
      Data:
      {{ updatedUser }}
    </div>
    <button @click="updateUserAge">Update User</button>
    <hr>
    <h3>Example 5</h3>Name:
    <input v-model="new_name">
    Age:
    <input v-model.number="new_age">
    <div>
      Data:
      {{ insertedUser }}
    </div>
    <button @click="newUser">Insert New User</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",

  data() {
    return {
      example1: "",
      users: [],
      name: "Dhruv Jain",
      user: {},
      updateduser: {},
      age: 55
    };
  },

  methods: {
    async getTest() {
      try {
        const res = await axios.post("http://localhost:4000/graphql", {
          query: "{ get }"
        });
        this.example1 = res.data.data.get;
      } catch (e) {
        console.log("err", e);
      }
    },
    async updateUserAge() {
      const res = await axios.post("http://localhost:4000/graphql", {
        query: ` 
        mutation UpdateUserAge($name: String!, $age: Int!) {
          updateUserAge(name: $name, age: $age) { 
            name
            age
          }  
        }`,
        variables: {
          name: this.name,
          age: this.age
        }
      });
      this.updatedUser = res.data.data.updatedUser;
      alert("User Updated");
    },

    async getUserByName() {
      const res = await axios.post("http://localhost:4000/graphql", {
        query: ` 
        query getUserByName($name:String!){
          getUserByName(name:$name){
            name
            age
          }
        }`,
        variables: {
          name: this.name
        }
      });
      this.user = res.data.data.getUserByName;
    },

    async getUsers() {
      const res = await axios.post("http://localhost:4000/graphql", {
        query: `{ 
          getUsers { 
            name 
          } 
        }`
      });
      this.users = res.data.data.getUsers;
    },

    async newUser() {
      const res = await axios.post("http://localhost:4000/graphql", {
        query: ` 
        mutation insertUser($new_name:String!,$new_age:Int!) { 
	            insertUser(name:$new_name,age:$new_age){
		            name
                age
              }
            } 
        }`,
        variables: {
          new_name: this.new_name,
          new_age: this.new_age
        }
      });
      this.insertedUser = res.data.data.insertUser;
      alert("New User Inserted");
      
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
