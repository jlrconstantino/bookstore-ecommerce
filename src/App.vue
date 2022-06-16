<template>
  <HeaderComponent></HeaderComponent>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/homepage">Homepage</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/product">Product</router-link> |
  </nav>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue'
  import FooterComponent from './components/FooterComponent.vue'
  export default {
    components: {
      HeaderComponent, 
      FooterComponent
    }
  }
</script>

<style>
  @import "./css/global-style.css";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
