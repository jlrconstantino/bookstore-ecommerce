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

    // Usuário ativo
    user: {
      id: null, 
      name: null, 
      role: null, 
    }, 

    // Carrinho ativo
    cart: [

    ], 

    // Método de compra ativo
    payment_method: null, 

    // Endereço de entrega ativo
    delivery_address: null, 

  },

  // Métodos acessores customizados
  getters: {

    // ID do usuário
    user_id(state) {
      return state.user.id;
    }, 

    // Nome do usuário
    user_name(state) {
      return state.user.name;
    }, 

    // Para verificar autenticação
    is_authenticated(state) {
      return state.user.id != null;
    },

    // Para verificar permissões administrativas
    is_admin(state) {
      return state.user.role === 'admin';
    }, 

    // Retorna o carrinho de compras
    get_shopping_cart(state) {
      return state.cart;
    }, 

    // Retorna a quantia total de elementos no carrinho
    get_shopping_cart_total_quantity(state) {
      let output = 0;
      for(const item of state.cart){
        output += item.quantity;
      }
      return output;
    }, 

    // Retorna o subtotal do carrinho de compras
    get_shopping_cart_subtotal(state) {
      let output = 0.0;
      for(const item of state.cart){
        output += item.subtotal;
      }
      return output;
    }, 

    // Retorna o método de pagamento ativo
    payment_method(state) {
      return state.payment_method;
    }, 

    // Retorna o endereço de entrega ativo
    delivery_address(state) {
      return state.delivery_address;
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


    // Realiza logout
    logout(state) {
      state.user.id = null;
      state.user.name = null;
      state.user.role = null;
      state.cart = [];
      state.payment_method = null;
      state.delivery_address = null;
    }, 


    // Adiciona um item ao carrinho
    add_cart_item(state, product_id) {

      // Verifica existência prévia
      let index = state.cart.findIndex(item => {
        return item.product == product_id;
      });

      // Adição de uma unidade a um item pré-existente
      if(index !== -1) {
        state.cart[index].quantity += 1;
      }
      
      // Adição de um novo item
      else{
        state.cart.push({
          product: product_id, 
          quantity: 1, 
          subtotal: 0, 
        });
      }
    }, 


    // Remove um item do carrinho
    remove_cart_item(state, product_id) {

      // Verifica existência prévia
      let index = state.cart.findIndex(item => {
        return item.product == product_id;
      });

      // Remoção
      if(index !== -1) {
        state.cart.splice(index, 1);
      }
    }, 


    // Atualiza a quantidade de um item do carrinho de compras
    update_cart_item_quantity(state, payload) {
      state.cart[payload.index].quantity = payload.quantity;
    }, 


    // Atualiza o subtotal de um item do carrinho de compras
    update_cart_item_subtotal(state, payload) {
      state.cart[payload.index].subtotal = payload.subtotal;
    }, 


    // Desativa os atributos de finalização de compra
    end_purchase(state) {
      state.payment_method = null;
      state.delivery_address = null;
    }, 


    // Seleciona um método de pagamento
    set_payment_method(state, payment_method) {
      state.payment_method = payment_method;
    }, 


    // Seleciona um endereço de entrega
    set_delivery_address(state, delivery_address) {
      state.delivery_address = delivery_address;
    }, 
  },

  actions: {
  },
  modules: {
  }
})

// Exportação
export default store;