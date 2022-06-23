// Importação dos elementos necessários para a construção de rotas
import { createRouter, createWebHistory } from 'vue-router';

// Importação dos componentes de visão das rotas
import AccountView from '../views/AccountView.vue';
import CartView from '../views/CartView.vue';
import CategoryView from '../views/CategoryView.vue';
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/ProductView.vue';
import SearchView from '../views/SearchView.vue';

// Importação dos componentes auxiliares das rotas
import LogRegForm from '@/components/LogRegForm.vue';
import AccountNavigator from '@/components/AccountNavigator.vue';

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

  // Página de usuário
  {
    path: '/account', 
    name: 'account', 
    component: AccountView, 
    children: [
      {path: 'profile', component: AccountNavigator}, 
      {path: 'login', component: LogRegForm}, 
    ], 
  }, 
];

// Roteador
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Exportação do roteador para uso externo
export default router;
