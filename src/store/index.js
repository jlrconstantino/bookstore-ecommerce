// Importações
import { createStore } from 'vuex';
import { load_local_storage_books } from '@/utils/local-storage-management';

// Para compartilhamento de estados
export default createStore({

  // Estados compartilhados
  state: {
    books: null, 
  },

  // Acesso aos estados
  getters: {
    books: state => {
      if(state.books != null){
        return state.books;
      }
      load_local_storage_books().then(res => {
        state.books = res;
      });
      return state.books;
    }
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
