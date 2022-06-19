// Importação dos elementos necessários para a construção de rotas
import { createRouter, createWebHistory } from 'vue-router';

// Importação dos componentes das rotas
import CartView from '../views/CartView.vue';
import CategoryView from '../views/CategoryView.vue';
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/ProductView.vue';
import SearchView from '../views/SearchView.vue';


// Rotas estabelecidas
const routes = [

  // Página principal
  {
    path: '/', 
    name: 'HomeView', 
    component: HomeView
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
];

// Roteador
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Exportação do roteador para uso externo
export default router;
