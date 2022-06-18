// Importação dos elementos necessários para a construção de rotas
import { createRouter, createWebHistory } from 'vue-router';

// Importação dos componentes das rotas
import CartPage from '../components/CartPage.vue';
import HomePage from '../components/HomePage.vue';
import ProductPage from '../components/ProductPage.vue';
import SearchPage from '../components/SearchPage.vue';

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
        title: route.params.title, 
        price: Number(route.params.price), 
        img_src: route.params.img_src,
        description: route.params.description,
        author: route.params.author,
        publisher: route.params.publisher,
        finishing: route.params.finishing, 
        year: Number(route.params.year), 
        language: route.params.language, 
        pages: route.params.pages, 
        id: Number(route.params.id), 
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
