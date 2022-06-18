// Importação dos elementos necessários para a construção de rotas
import { createRouter, createWebHistory } from 'vue-router';

// Importação dos componentes das rotas
import CartPage from '../views/CartPage.vue';
import HomePage from '../views/HomePage.vue';
import ProductPage from '../views/ProductPage.vue';
import SearchPage from '../views/SearchPage.vue';

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
    props(route) {
      return {
        id: Number(route.params.id), 
        title: route.params.title, 
        price: Number(route.params.price), 
        rating: Number(route.params.price), 
        author: route.params.author,
        publisher: route.params.publisher,
        finishing: route.params.finishing, 
        year: Number(route.params.year), 
        language: route.params.language, 
        pages: route.params.pages, 
        description: route.params.description,
        img_src: route.params.img_src,
      };
    },
  }, 

  // Página de busca
  {
    path: '/search', 
    name: 'search', 
    component: SearchPage, 
  }, 
];

// Roteador
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Exportação do roteador para uso externo
export default router;
