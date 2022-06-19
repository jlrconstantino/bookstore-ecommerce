// Importação dos elementos necessários para a construção de rotas
import { createRouter, createWebHistory } from 'vue-router';

// Importação dos componentes das rotas
import CartPage from '../views/CartPage.vue';
import HomePage from '../views/HomePage.vue';
import ProductPage from '../views/ProductPage.vue';
import SearchPage from '../views/SearchPage.vue';
import CategoryPage from '../views/CategoryPage.vue';

// Rotas estabelecidas
const routes = [

  // Página principal
  {
    path: '/', 
    name: 'homepage', 
    component: HomePage
  },

  // Carrinho de compras
  {
    path: '/cart', 
    name: 'cart', 
    component: CartPage, 
  },

  // Página de produto
  {
    path: '/product', 
    name: 'product', 
    component: ProductPage, 
  }, 

  // Página de busca
  {
    path: '/search', 
    name: 'search', 
    component: SearchPage, 
  }, 

  // Página de busca por categoria
  {
    path: '/category', 
    name: 'category', 
    component: CategoryPage, 
  }, 
];

// Roteador
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Exportação do roteador para uso externo
export default router;
