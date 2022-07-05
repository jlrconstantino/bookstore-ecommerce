<!-- .:::: TEMPLATE ::::. -->
<template>

    <!-- Seção inicial -->
    <div v-if="selected_product_id == null">

        <!-- Apresentação -->
        <h2 class="form-h2">Gerenciar Produtos</h2>
        <p class="text-common-color">Quantia de produtos encontrados: {{filtered_products_data.length}}.</p>
        <br>

        <!-- Caixa de pesquisa -->
        <input 
            v-model="search_string" 
            type="text" 
            placeholder="Pesquisar por nome ou por ID" 
            id="searcher">

        <!-- Produtos cadastrados -->
        <table class="form-table" v-if="filtered_products_data.length > 0">

            <!-- Cabeçalho da tabela -->
            <tr class="form-table-header-row">
                <th class="form-table-title-item">Nome do Produto</th>
                <th class="form-table-center-item">Quantia em Estoque</th>
                <th class="form-table-last-item">Mais Detalhes</th>
            </tr>

            <!-- Itens da tabela -->
            <tr 
                v-for="(product, index) in filtered_products_data" 
                :key="product" 
                :class="index % 2 === 0 ? 'form-table-item-row-0' : 'form-table-item-row-1'">
                <td>
                    <label>{{product.title}}</label>
                </td>
                <td>
                    <label>{{product.stock}}</label>
                </td>
                <td>
                    <a @click="start_product_update(product.id)">Visualizar/Modificar</a>
                </td>
            </tr>

        </table>

    </div>

    <!-- Seção de visualização do produto -->
    <div v-if="selected_product_id != null">
        
        <!-- Seção de dados -->
        <div v-if="!updating_data">

            <!-- Apresentação -->
            <h2 class="form-h2">Dados do Produto</h2>
            <br>

            <!-- Nome do produto -->
            <h3 class="form-h3">Título</h3>
            <p class="form-info-container text">{{selected_product.title}}</p>

            <!-- Preço e Quantia em estoque -->
            <div class="form-double-section margin-bottom-div margin-top-div">
                <div class="form-vertical-section">
                    <h3 class="form-h3">Preço</h3>
                    <p class="form-info-container text">{{selected_product.price}}</p>
                </div>
                <div class="form-vertical-section">
                    <h3 class="form-h3">Quantidade em Estoque</h3>
                    <p class="form-info-container text">{{selected_product.stock}}</p>
                </div>
            </div>

            <!-- Avaliação e Total de vendas -->
            <div class="form-double-section margin-bottom-div">
                <div class="form-vertical-section">
                    <h3 class="form-h3">Avaliação Média</h3>
                    <p class="form-info-container text">{{selected_product.rating}}</p>
                </div>
                <div class="form-vertical-section">
                    <h3 class="form-h3">Total de Vendas</h3>
                    <p class="form-info-container text">{{selected_product.sales}}</p>
                </div>
            </div>

            <!-- Autor e Editora -->
            <div class="form-double-section margin-bottom-div">
                <div class="form-vertical-section">
                    <h3 class="form-h3">Autor</h3>
                    <p class="form-info-container text">{{selected_product.author}}</p>
                </div>
                <div class="form-vertical-section">
                    <h3 class="form-h3">Editora</h3>
                    <p class="form-info-container text">{{selected_product.publisher}}</p>
                </div>
            </div>

            <!-- Ano e Acabamento -->
            <div class="form-double-section margin-bottom-div">
                <div class="form-vertical-section">
                    <h3 class="form-h3">Ano da Edição</h3>
                    <p class="form-info-container text">{{selected_product.year}}</p>
                </div>
                <div class="form-vertical-section">
                    <h3 class="form-h3">Acabamento</h3>
                    <p class="form-info-container text">{{selected_product.finishing}}</p>
                </div>
            </div>

            <!-- Linguagem e Total de páginas -->
            <div class="form-double-section margin-bottom-div">
                <div class="form-vertical-section">
                    <h3 class="form-h3">Linguagem</h3>
                    <p class="form-info-container text">{{selected_product.language}}</p>
                </div>
                <div class="form-vertical-section">
                    <h3 class="form-h3">Quantia de Páginas</h3>
                    <p class="form-info-container text">{{selected_product.pages}}</p>
                </div>
            </div>

            <!-- Descrição -->
            <h3 class="form-h3">Descrição</h3>
            <p class="form-info-container text description margin-bottom-div">{{selected_product.description}}</p>

            <!-- Fonte da Imagem -->
            <h3 class="form-h3">Fonte da Imagem</h3>
            <p class="form-info-container text">{{selected_product.image_source}}</p>

            <!-- Botão para atualização -->
            <button 
                @click="start_data_update()" 
                class="standard-button margin-top-div margin-bottom-div">Atualizar Dados</button>

        </div>

        <!-- Atualização dos dados -->
        <div v-if="updating_data">

        </div>

    </div>

</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Para manipulação da base de dados
    import { delete_product, select_all_products, update_product } from '@/utils/database-management';

    // Para manipulação de formulários
    import { validate_attribute_by_callback, validate_password_by_id } from '@/utils/form-validation';

    // REGEX numérico
    const numeric_parser = new RegExp("^[0-9]+$", "g");

    // Lógica local
    export default {

        // Nome do componente
        name: "ProductsManager",
        
        // Dados locais
        data() {
            return {
                
                // Dados dos produtos
                products_data: [], 
                dummy_product: {
                    id: -1, 
                    title: "???", 
                    price: 0, 
                    stock: 0, 
                    rating: 0.0, 
                    sales: 0, 
                    author: "???", 
                    publisher: "???", 
                    finishing: "???", 
                    year: 0, 
                    language: "???", 
                    pages: 0, 
                    description: "???", 
                    image_source: "???", 
                }, 

                // Para controle de fluxo
                search_string: "", 
                updating_data: false, 
                updating_security: false, 

                // Para controle de senha
                password: "", 
                password_is_valid: true, 
                password_is_empty: false, 

                // Para controle de função
                role: "customer", 
            };
        }, 

        // Carrega os dados dos produtos
        created() {
            select_all_products().then(res => {
                if(res != null) {
                    this.products_data = res;
                }
            });
        }, 

        // Métodos auxiliares
        methods: {
            
            // Visualização / atualização do produto
            start_product_update(product_id) {
                this.$router.push({name: 'manage-products', query: {id: product_id}});
                window.scrollTo(0,0);
            }, 

            // Reseta o formulário
            reset_form() {
                this.password = "";
                this.password_is_empty = false;
                this.password_is_valid = true;
            }, 

            // Atualizações de permissão
            start_data_update() {
                this.reset_form();
                this.updating_security = false;
                this.updating_data = true;
            }, 

            // Valida as permissões
            validate_data_update() {

                // Para controle de resultado
                let output = true;

                // Validação de função
                if (this.role != "customer" && this.role != "admin"){
                    output = false;
                }

                // Validação de senha
                if (
                    validate_attribute_by_callback (
                        this, 
                        this.password, 
                        password => {return password.length >= 3}, 
                        "password_is_empty", 
                        "password_is_valid"
                    ) === false
                ){
                    output = false;
                }

                return output;
            }, 

            // Atualiza as permissões
            update_data: async function() {

                // Valida os dados
                if(this.validate_data_update() === true){

                    // Valida a senha
                    await validate_password_by_id(this.selected_product.id, this.password).then(res => {
                        if(res === true) {
                            this.password_is_valid = true;

                            // Atualiza a base de dados se houve modificações
                            if(this.role != this.selected_product.role){
                                this.selected_product.role = this.role;
                                update_product(this.selected_product);
                            }

                            // Avisa ao produto e finaliza
                            alert("Alterações de permissão efetuadas com sucesso.");
                            this.updating_data = false;

                        }
                        else{
                            this.password_is_valid = false;
                        }
                    });
                }
            }, 

            // Cancela as atualizações de permissão
            cancel_data_update() {
                this.reset_form();
                this.updating_data = false;
            }, 

            // Inicializa a remoção
            start_product_removal() {
                this.reset_form();
                this.updating_security = true;
                this.updating_data = false;
            }, 

            // Valida a remoção
            validate_product_removal() {
                
                // Para controle de resultado
                let output = true;

                // Validação de senha
                if (
                    validate_attribute_by_callback (
                        this, 
                        this.password, 
                        password => {return password.length >= 3}, 
                        "password_is_empty", 
                        "password_is_valid"
                    ) === false
                ){
                    output = false;
                }

                return output;
            }, 

            // Remoção de produto
            remove_product: async function() {

                // Valida os dados
                if(this.validate_product_removal() === true){

                    // Valida a senha
                    await validate_password_by_id(this.selected_product.id, this.password).then(res => {
                        if(res === true) {
                            this.password_is_valid = true;

                            // Atualiza a base de dados
                            delete_product(this.selected_product);

                            // Avisa ao produto e finaliza
                            alert("Produto removido com sucesso.");
                            this.updating_security = false;
                            this.$router.push({name: 'manage-products'});
                            window.scrollTo(0,0);
                        }
                        else{
                            this.password_is_valid = false;
                        }
                    });
                }
            }, 

            // Cancela a remoção
            cancel_product_removal() {
                this.reset_form();
                this.updating_security = true;
            }, 
        }, 

        // Atributos computados
        computed: {

            // ID selecionado por rota
            selected_product_id() {
                try {
                    return this.$route.query.id;
                } catch(_) {
                    return null;
                }
            }, 

            // Produto selecionado
            selected_product() {
                const target_id = this.selected_product_id;
                if(target_id != null){
                    let output = this.products_data.find(product => {
                        return product.id == target_id;
                    });
                    if(output != null){
                        return output;
                    }
                }
                return this.dummy_product;
            }, 

            // Produtos selecionados
            filtered_products_data() {

                // Sem pesquisa
                if(this.search_string == null || this.search_string == ""){
                    return this.products_data;
                }

                // Padrão de busca
                const pattern = new RegExp(this.search_string.toLowerCase(), "g");

                // Padrão numérico
                if(numeric_parser.test(this.search_string) === true){
                    return this.products_data.filter(product => {
                        return pattern.test(product.id);
                    });
                }

                // Padrão alfanumérico
                return this.products_data.filter(product => {
                    return pattern.test(product.title.toLowerCase());
                });
            }, 
        }, 
    }

</script>


<!-- .:::: STYLE ::::. -->
<style scoped>
    @import "../css/profile-form.css";

    /* Caixa de pesquisa */
    #searcher {
        width: auto;
        min-width: calc(35% - 2rem);
        height: 1rem;
        font-size: 1rem;
        border-radius: 8px;
        background-color: var(--header-searcher-background-color);
        border: var(--header-searcher-border);
        box-shadow: var(--box-shadow-minimized);
        padding: 1rem;
        margin-bottom: 1rem;
    }

    /* Tabela */
    table {
        margin-bottom: 0;
    }

    /* Divisões com margens */
    .margin-bottom-div {
        margin-bottom: 2rem;
    }
    .margin-top-div {
        margin-top: 2rem;
    }

    /* Botões */
    button {
        font-size: 1rem;
        height: 2.5rem;
        width: auto;
        min-width: 25%;
    }

    /* Texto descritivo */
    .description {
        text-align: justify;
    }

</style>