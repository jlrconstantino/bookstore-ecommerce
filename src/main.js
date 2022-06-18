// Importações
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { startLocalStorage } from "./utils/local-storage-management.js";

// Inicialização do repositório local
startLocalStorage();

// Criação do aplicativo
createApp(App).use(router).mount('#app');