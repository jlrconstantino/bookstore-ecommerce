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
                    <calculator :freight="freight" @update:freight="freight = $event"></calculator>

                </div>

                <!-- Seção direita -->
                <div class="lower-right-section">
                    <table class="cart-result-table">

                        <!-- Subtotal -->
                        <tr>
                            <td class="table-label">
                                <h3 class="text-darker-color">Subtotal:</h3>
                            </td>
                            <td class="table-value">
                                <p class="text-common-color">{{subtotal_view}}</p>
                            </td>
                        </tr>

                        <!-- Frete -->
                        <tr>
                            <td class="table-label table-divisor">
                                <h3 class="text-darker-color">Frete:</h3>
                            </td>
                            <td class="table-value table-divisor">
                                <p class="text-common-color">{{freight_view}}</p>
                            </td>
                        </tr>

                    </table>
                    <table class="cart-result-table second-table">

                        <!-- Total -->
                        <tr>
                            <td class="table-label">
                                <h3 class="text-darker-color">Total:</h3>
                            </td>
                            <td class="table-value">
                                <p class="text-common-color">{{total_view}}</p>
                            </td>
                        </tr>
                        
                    </table>
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

    // Para formatação em string
    import { format_number_to_price } from '@/utils/utils';

    // Lógica local
    export default {

        // Nome do componente
        name: 'HomeView', 

        // Integração de componentes
        components: {
            "cart-item": CartItem, 
            "calculator": FreightCalculator, 
        }, 

        // Dados locais
        data() {
            return {

                // Valor de frete
                freight: 0.00, 

            };
        }, 

        // Atributos computados
        computed: {

            // Lista de itens do carrinho
            cart_items() {
                return store.getters.get_shopping_cart;
            }, 

            // Subtotal da lista de itens do carrinho
            subtotal() {
                return store.getters.get_shopping_cart_subtotal;
            }, 

            // Total da lista de itens do carrinho
            total() {
                return this.subtotal + this.freight;
            }, 

            // Para representação em string
            freight_view() {
                return format_number_to_price(this.freight);
            }, 
            subtotal_view() {
                return format_number_to_price(this.subtotal);
            },
            total_view() {
                return format_number_to_price(this.total);
            }, 
        }, 
    }
</script>


<!-- .:::: STYLE ::::. -->
<style scoped>
    @import "../css/colors.css";
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
        width: 50%;
        float: right;
    }


    /* Tabela de revisão */
    .cart-result-table {
        position: relative;
        width: 100%;
        border-spacing: 0.5rem 0.5rem;
    }
    .cart-result-table tr {
        position: relative;
        width: 100%;
    }
    .cart-result-table h3 {
        font-size: 2rem;
    }
    .cart-result-table p {
        text-align: left;
        font-size: 1.5rem;
    }
    .table-label {
        max-width: 30%;
    }
    .table-value {
        max-width: 70%;
    }
    .second-table {
        border-top: var(--box-border);
    }
</style>