// Importação dos elementos necessários para a construção de rotas
import { createRouter, createWebHistory } from 'vue-router';

// Importação do Vuex
import store from '@/store/index.js';

// Importação dos componentes das rotas
import AccountWrapperView from '@/views/AccountWrapperView.vue';
import AccountNavigationView from '@/views/AccountNavigationView.vue';
import CartView from '@/views/CartView.vue';
import CategoryView from '@/views/CategoryView.vue';
import HomeView from '@/views/HomeView.vue';
import LogRegForm from '@/components/LogRegForm.vue';
import ProductsManager from '@/components/ProductsManager.vue';
import ProductView from '@/views/ProductView.vue';
import ProfileAddresses from '@/components/ProfileAddresses.vue';
import ProfileData from '@/components/ProfileData.vue';
import ProfilePayment from '@/components/ProfilePayment.vue';
import SearchView from '@/views/SearchView.vue';
import UsersManager from '@/components/UsersManager.vue';

// Rotas estabelecidas
const routes = [

  // Página principal
  {
    path: '/', 
    name: 'home', 
    component: HomeView, 
  },

  // Carrinho de compras
  {
    path: '/cart', 
    name: 'cart', 
    component: CartView, 
  },

  // Página de produto
  {
    path: '/product', 
    name: 'product', 
    component: ProductView, 
  }, 

  // Página de busca
  {
    path: '/search', 
    name: 'search', 
    component: SearchView, 
  }, 

  // Página de busca por categoria
  {
    path: '/category?id=:id', 
    name: 'category', 
    params: ['id'], 
    component: CategoryView, 
  }, 

  // Página da conta de usuário
  {
    path: '/account', 
    name: 'account', 
    redirect: {name: 'login'}, 
    component: AccountWrapperView, 
    children: [

      // Página de login/registro
      {
        path: 'login', 
        name: 'login', 
        component: LogRegForm
      }, 

      // Página de perfil do usuário (requer autenticação)
      {
        path: 'profile', 
        name: 'profile', 
        component: AccountNavigationView, 
        redirect: {name: 'profile-data'}, 
        meta: {
          requires_authentication: true, 
        }, 
        children: [

          // Página de dados pessoais do usuário
          {
            name: 'profile-data', 
            path: 'data', 
            component: ProfileData
          }, 

          // Página de métodos de pagamento do usuário
          {
            name: 'profile-payment-methods', 
            path: 'payment-methods', 
            component: ProfilePayment
          }, 

          // Página de endereços de entrega do usuário
          {
            name: 'profile-addresses', 
            path: 'addresses', 
            component: ProfileAddresses
          }, 

          // Página de gerenciamento de usuários
          {
            name: 'manage-users', 
            path: 'manage-users', 
            component: UsersManager, 
            meta: {
              requires_admin_role: true, 
            }, 
          }, 

          // Página de gerenciamento de produtos
          {
            name: 'manage-products', 
            path: 'manage-products', 
            component: ProductsManager, 
            meta: {
              requires_admin_role: true, 
            }, 
          }, 
        ], 
      }, 
    ], 
  }, 
];

// Roteador
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Para verificação de autenticação do usuário
router.beforeEach((to, _, next) => {

  // Verifica necessidade de autenticação
  if (to.matched.some(record => record.meta.requires_authentication)) {

    // Verifica autenticação
    if (store.getters.is_authenticated) {

      // Verifica necessidade de permissões administrativas
      if (to.matched.some(record => record.meta.requires_admin_role)) {

        // Verifica permissão administrativa
        if(store.getters.is_admin){
          next();
        }

        // Não é um administrador
        else{
          next({name: 'login'})
        }
      }

      // Não necessita de permissões administrativas
      else{
        next();
      }
    } 
    
    // Usuário não autenticado
    else {
      next({name: 'login'});
    }
  } 
  
  // Página não necessita autenticação
  else {
    next();
  }
})

// Exportação do roteador para uso externo
export default router;
