<!-- .:::: TEMPLATE ::::. -->
<template>

    <!-- Método de Pagamento -->
    <h2 class="form-h2">Método de Pagamento</h2>
    <template v-if="credit_card != null">
        <div class="form-double-section" style="margin-bottom:2rem;">
            <div class="form-vertical-section">
                <h3 class="form-h3">Título:</h3>
                <p class="form-info-container text">{{credit_card.title}}</p>
            </div>
            <div class="form-vertical-section">
                <h3 class="form-h3">Número:</h3>
                <p class="form-info-container text">{{credit_card.number}}</p>
            </div>
        </div>
    </template>
    <p 
        class="form-failed-input-text"
        v-if="credit_card == null">
        Nenhum método de pagamento selecionado.
    </p>

    <!-- Endereço de Entrega -->
    <h2 class="form-h2">Endereço de Entrega</h2>
    <template v-if="delivery_address != null">
        <div class="form-double-section" style="margin-bottom:2rem;">
            <div class="form-vertical-section">
                <h3 class="form-h3">Título:</h3>
                <p class="form-info-container text">{{delivery_address.title}}</p>
            </div>
            <div class="form-vertical-section">
                <h3 class="form-h3">CEP:</h3>
                <p class="form-info-container text">{{delivery_address.zip}}</p>
            </div>
        </div>
    </template>
    <p 
        class="form-failed-input-text"
        v-if="delivery_address == null">
        Nenhum endereço de entrega selecionado.
    </p>

    <!-- Produtos -->
    <h2 class="form-h2">Produtos</h2>
    <template v-if="shopping_cart != null && shopping_cart.length > 0">
        <table class="form-table">

            <!-- Cabeçalho da tabela -->
            <tr class="form-table-header-row">
                <th class="form-table-title-item">Nome do Produto</th>
                <th class="form-table-center-item">Quantidade</th>
                <th class="form-table-last-item">Subtotal</th>
            </tr>

            <!-- Itens da tabela -->
            <tr 
                v-for="(item, index) in shopping_cart" 
                :key="item" 
                :class="index % 2 === 0 ? 'form-table-item-row-0' : 'form-table-item-row-1'">
                <td>
                    <label>{{select_product_title(item.product)}}</label>
                </td>
                <td>
                    <label>{{item.quantity}}</label>
                </td>
                <td>
                    <label>{{format_price(item.subtotal)}}</label>
                </td>
            </tr>

        </table>
    </template>
    <p 
        class="form-failed-input-text"
        v-if="shopping_cart == null || shopping_cart.length <= 0">
        Nenhum produto selecionado.
    </p>

    <!-- Finalização de compra -->
    <button
        :class="is_ready === true ? 'standard-button' : 'red-button'"
        @click="end_purchase()">
        Finalizar Compra
    </button>
    <p v-if="!has_payment_method" class="form-failed-input-text">Selecione um método de pagamento.</p>
    <p v-if="!has_delivery_address" class="form-failed-input-text">Selecione um endereço de entrega.</p>
    <p v-if="!has_products" class="form-failed-input-text">Selecione um ou mais produtos.</p>

</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Vuex
    import store from '@/store';

    // Base de dados
    import { add_shopping_cart, select_product_by_id } from '@/utils/database-management';

    // Para formatação de preços e geração de números pseudoaleatórios
    import { format_number_to_price, get_random_integer } from '@/utils/utils';

    // Lógica local
    export default {

        // Nome do componente
        name: "PurchaseFinal", 

        // Dados

        // Métodos auxiliares
        methods: {

            // Seleciona um produto
            select_product_title: async function(id) {
                let product = null;
                await select_product_by_id(id).then(res => {
                    product = res;
                });
                if(product != null) {
                    return product.title;
                }
                return "???";
            }, 

            // Formata um preço para string
            format_price(price) {
                return format_number_to_price(price);
            }, 

            // Finaliza a compra
            end_purchase() {
                if(this.is_ready === true){

                    // Valores especiais
                    let invoice = get_random_integer(1000000);
                    let datetime = new Date();

                    // Carrinho de compras para o banco de dados
                    const shopping_cart = {
                        user: store.getters.user_id, 
                        invoice: invoice, 
                        datetime: datetime, 
                        subtotal: store.getters.get_shopping_cart_subtotal, 
                        freight: store.getters.freight, 
                    };
                    add_shopping_cart(shopping_cart);


                }
            }, 
        }, 
        
        // Atributos computados
        computed: {
            credit_card() {
                return store.getters.payment_method;
            }, 
            delivery_address() {
                return store.getters.delivery_address;
            }, 
            shopping_cart() {
                return store.getters.get_shopping_cart;
            }, 
            has_payment_method() {
                return this.credit_card != null;
            }, 
            has_delivery_address() {
                return this.delivery_address != null;
            }, 
            has_products() {
                if(this.shopping_cart != null){
                    return this.shopping_cart.length > 0;
                }
                return false;
            }, 
            is_ready() {
                return (
                    this.has_payment_method && 
                    this.has_delivery_address && 
                    this.has_products
                );
            }, 
        }, 
    }

</script>


<!-- .:::: STYLE ::::. -->
<style scoped>
    @import "../css/profile-form.css";
    button {
        font-size: 1.2rem;
        height: 2.2rem;
        min-width: auto;
        width: 30%;
        margin-bottom: 0.5rem;
    }
</style>