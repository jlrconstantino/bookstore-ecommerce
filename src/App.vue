<!-- .:::: TEMPLATE ::::. -->
<template>

  <!-- HEADER -->
  <HeaderComponent></HeaderComponent>

  <!-- PÁGINA PRINCIPAL -->
  <div id="main-container">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>

  <!-- FOOTER -->
  <FooterComponent></FooterComponent>

</template>


<!-- .:::: SCRIPT ::::. -->
<script>

  // Importação dos componentes
  import HeaderComponent from './components/HeaderComponent.vue'
  import NavBar from './components/NavBar.vue'
  import FooterComponent from './components/FooterComponent.vue'

  // Lógica local
  export default {

    // Componentes
    components: {
      HeaderComponent, 
      NavBar, 
      FooterComponent, 
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
