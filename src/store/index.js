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
      id: null, 
      name: null, 
      role: null, 
    },

  },

  // Métodos acessores customizados
  getters: {
  },

  // Métodos modificadores
  mutations: {

    // Modifica o usuário
    set_user(state, id, name, role) {
      state.user.id = id;
      state.user.name = name;
      state.user.role = role;
    }, 

  },

  actions: {
  },
  modules: {
  }
})
