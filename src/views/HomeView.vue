<!-- .:::: TEMPLATE ::::. -->
<template>
    <div id="cart-container">

        <!-- Título da página -->
        <h2 id="cart-title" class="subtitle">Meu Carrinho</h2>
        <p id="cart-info" class="text-common-color">Quantidade de produtos: {{cart_items.length}}</p>
        <div v-if="cart_items.length > 0">

            <!-- Carrinho -->
            <table class="form-table">

                <!-- Header do Carrinho -->
                <tr class="form-table-header-row">
                    <th class="form-table-t1">Produto</th>
                    <th class="form-table-t2">Quantidade</th>
                    <th class="form-table-t2">Subtotal</th>
                    <th class="form-table-t3">Remover</th>
                </tr>

                <!-- Itens do Carrinho -->
                <cart-item 
                    v-for="(item, index) in cart_items" 
                    :key="item" 
                    :cart_product="item"
                    :cart_product_index="index"
                    :last_item="index === cart_items.length - 1">
                </cart-item>

            </table>

            <!-- Seção inferior -->
            <div class="lower-section">
                
                <!-- Seção esquerda -->
                <div class="lower-left-section">

                    <!-- Calculadora de frete -->
                    <calculator></calculator>

                </div>

                <!-- Seção direita -->
                <div class="lower-right-section">

                </div>
            
            </div>

        </div>
    
    </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Importação do Vuex
    import store from '@/store';

    // Importação de componentes
    import CartItem from '@/components/CartItem.vue';
    import FreightCalculator from '@/components/FreightCalculator.vue';

    // Lógica local
    export default {

        // Nome do componente
        name: 'HomeView', 

        // Integração de componentes
        components: {
            "cart-item": CartItem, 
            "calculator": FreightCalculator, 
        }, 

        // Lista de itens do carrinho
        computed: {
            cart_items() {
                return store.getters.get_shopping_cart;
            }, 
        }, 
    }
</script>


<!-- .:::: STYLE ::::. -->
<style scoped>
    @import "../css/profile-form.css";

    /* Organiza a página */
    #cart-container {
        width: 85%;
    }
    #cart-title {
        margin-bottom: 2vh;
    }
    #cart-info {
        margin-bottom: 4%;
    }

    /* Organiza a tabela */
    table {
        border-collapse: separate;
    }
    .form-table-t1 {
        width: 50%;
    }
    .form-table-t2 {
        width: 20%;
    }
    .form-table-t3 {
        width: 10%;
    }


    /* Seção inferior */
    .lower-section {
        width: 100%;
        display: block;
    }
    .lower-left-section {
        width: 35%;
        float: left;
    }
    .lower-right-section {
        width: 75%;
        float: right;
    }
</style>