// Importações
import { createStore } from 'vuex';

// Para compartilhamento de estados
export default createStore({

  // Estados compartilhados
  state: {

    // Para definir as categorias em ênfase
    featured_categories: [
      "Mais Vendidos", 
      "Promoções", 
      "Lançamentos", 
      "Infantil", 
    ], 

    // Para definir as categorias no menu
    menu_categories: [
      "Literatura Internacional", 
      "Literatura Brasileira", 
      "Ficção Científica", 
      "História", 
      "Biografia", 
      "Autoajuda", 
      "Psicologia",
    ], 

    // Usuário ativo
    user: {
      name: null, 
      id: null, 
    },

  },

  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
