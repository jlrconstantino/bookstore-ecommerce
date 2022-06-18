<!-- .:::: TEMPLATE ::::. -->
<template>
    <nav>
        <div>
            <a 
                v-for="(page, index) in pages" 
                :key="index" 
                class="text-common-color hover-interaction-link"
                @click="go_to_page(index)"
            >{{get_route_name(page, index)}}</a>
        </div>
        <hr>
    </nav>
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
                routes: [{name: "homepage"}], 
            };
        }, 

        // Métodos auxiliares
        methods: {

            // Navegação
            go_to_page(index) {
                this.$router.push(this.routes[index]);
                this.pages.length = index + 1;
                this.routes.length = index + 1;
                window.scrollTo(0,0);
            },

            // Nome da rota
            get_route_name(page, index) {
                if(index > 0){
                    return " > " + page;
                }
                return page;
            }, 
        }, 

        // Observação das mudanças de rota
        watch: {
            '$route': function(to) {

                // Verificação de existência
                if(this.routes.some(route => route.name === to.name) == false){

                    // Construção do nome
                    let page_name = "";
                    switch(to.name) {
                        case "product":
                            page_name = this.$route.params.title;
                            break;
                        case "cart":
                            page_name = "Carrinho de Compras";
                            break;
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
    nav {
        width: 80%;
    }
    p {
        font-size: 0.9rem;
    }
</style>