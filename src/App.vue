<!-- .:::: TEMPLATE ::::. -->
<template>

  <!-- HEADER -->
  <HeaderComponent></HeaderComponent>

  <!-- TEMPORÁRIO PARA NAVEGAR ENTRE AS ROTAS -->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/homepage">Homepage</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/product">Product</router-link> |
  </nav>

  <!-- PÁGINA PRINCIPAL -->
  <router-view></router-view>

  <!-- FOOTER -->
  <FooterComponent></FooterComponent>

</template>


<!-- .:::: SCRIPT ::::. -->
<script>

  // Importação dos componentes
  import HeaderComponent from './components/HeaderComponent.vue'
  import FooterComponent from './components/FooterComponent.vue'

  // Lógica local
  export default {

    // Componentes
    components: {
      HeaderComponent, 
      FooterComponent
    }

  }
  
</script>


<!-- .:::: STYLE ::::. -->
<style>
  @import "./css/reset.css";
  @import "./css/global-style.css";

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
