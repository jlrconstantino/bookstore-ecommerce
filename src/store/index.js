// Importações
import { createStore } from 'vuex';

// Para compartilhamento de estados
const store = createStore({

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

    // Para verificar autenticação
    is_authenticated(state) {
      return state.user.id != null;
    },

  },

  // Métodos modificadores
  mutations: {

    // Modifica o usuário
    set_user(state, user) {
      state.user.id = user.id;
      state.user.name = user.name;
      state.user.role = user.role;
    }, 

  },

  actions: {
  },
  modules: {
  }
})

// Exportação
export default store;