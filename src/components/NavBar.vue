<!-- .:::: TEMPLATE ::::. -->
<template>
    <div id="container">
        <nav>
            <a 
                v-for="(page, index) in pages" 
                :key="index" 
                class="hover-interaction-link"
                @click="go_to_page(index)"
            >{{get_route_name(page, index)}}</a>
            <hr>
        </nav>
    </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Lógica local
    export default {

        // Nome do componente
        name: "NavBar", 

        // Dados locais
        data() {
            return {
                pages: ["Página Principal"], 
                routes: [{name: "home"}], 
            };
        }, 

        // Métodos auxiliares
        methods: {

            // Navegação
            go_to_page(index) {
                this.$router.push(this.routes[index]);
                window.scrollTo(0,0);
            },

            // Nome da rota
            get_route_name(page, index) {
                if(index > 0){
                    return "\t>\t" + page;
                }
                return page;
            }, 
        }, 

        // Observação das mudanças de rota
        watch: {
            '$route': function(to) {

                // Verificação indexada de rotas pré-existentes
                let matches = 0;
                for(let i = 0; i < this.routes.length && matches === 0; ++i){
                    if(this.routes[i].name === to.name && to.name != 'category'){
                        matches += 1;

                        // Truncamento da lista de rotas
                        this.pages.length = i + 1;
                        this.routes.length = i + 1;
                    }
                }

                // Adição de rota
                if(matches === 0){

                    // Construção do nome
                    let page_name = "";
                    switch(to.name) {

                        // Página de produto
                        case "product":
                            page_name = this.$route.params.title;
                            if(page_name == null){
                                page_name = "Produto";
                            }
                            break;

                        // Carrinho de compras
                        case "cart":
                            page_name = "Carrinho de Compras";
                            break;

                        // Página de busca textual
                        case "search": 
                            page_name = "Resultado da Busca";
                            this.pages.length = 1;
                            this.routes.length = 1;
                            break;
                        
                        // Página de busca por categoria
                        case "category":
                            page_name = this.$route.query.target;
                            if(page_name == null){
                                page_name = "Categoria";
                            }
                            this.pages.length = 1;
                            this.routes.length = 1;
                            break;
                        
                        // Outros
                        default: 
                            break;
                    }

                    // Adição dos novos elementos
                    this.pages.push(page_name);
                    this.routes.push(to);
                }
            }
        }
    }
</script>


<!-- .:::: STYLE ::::. -->
<style scoped>
    @import "../css/colors.css";

    #container {
        background-color: var(--navigation-bar-background-color);
        padding-top: 3vh;
        padding-bottom: 1vh;
        width: 100%;
    }

    nav {
        width: 80%;
        margin: 0 auto;
    }

    a {
        font-size: 0.9rem;
        padding-right: 2px;
        color: #555555;
    }
</style>