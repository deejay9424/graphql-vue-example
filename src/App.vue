<template>
  <div id="app">
    <HelloWorld msg="Welcome to vue application"/>
    <hr><br>
    <mongodb/>
  </div>
</template>

<script>
import mongodb from "./components/mongodb";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "app",
  components: {
    mongodb,
    HelloWorld
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
