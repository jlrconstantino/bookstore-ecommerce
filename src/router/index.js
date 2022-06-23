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
import ProductView from '@/views/ProductView.vue';
import ProfileData from '@/components/ProfileData.vue';
import ProfileSecurity from '@/components/ProfileSecurity.vue';
import ProfilePayment from '@/components/ProfilePayment.vue';
import SearchView from '@/views/SearchView.vue';

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
    path: '/category', 
    name: 'category', 
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

          // Página de dados de segurança do usuário
          {
            name: 'profile-security', 
            path: 'security', 
            component: ProfileSecurity
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
  if (to.matched.some(record => record.meta.requires_authentication)) {
    if (store.getters.is_authenticated) {
      next();
    } else {
      next({name: 'login'})
    }
  } else {
    next();
  }
})

// Exportação do roteador para uso externo
export default router;
