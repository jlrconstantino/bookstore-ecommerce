<!-- .:::: TEMPLATE ::::. -->
<template>
    <div id="container">
        <h2 class="subtitle">{{this.$route.query.target}}</h2>
        <p class="text-common-color">Produtos encontrados: {{filtered_books.length}}</p>
    </div>
    <BookSection :books="filtered_books"></BookSection>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Importação de componentes
    import BookSection from "../components/BookSection.vue";

    // Para manipulação da base de dados local
    import { load_local_storage_books, load_local_storage_has_category } from "../utils/local-storage-management";

    // Lógica local
    export default {
        
        // Nome do componente
        name: "CategoryView", 

        // Atribuição de componentes externos
        components: {
            BookSection,
        }, 

        // Dados locais
        data() {
            return {

                // Livros
                books: [],

                // Categorias dos livros
                books_categories: [], 
                
                // Controle assíncrono
                data_is_ready: false, 
            };
        }, 

        // Carregamento da base de dados
        created: async function() {
            await load_local_storage_books().then(res => {
                this.books = res;
            });
            await load_local_storage_has_category().then(res => {
                this.books_categories = res;
            });
            this.data_is_ready = true;
        }, 

        // Para filtragem em tempo-real
        computed: {
            filtered_books: function() {

                // Verificação de disponibilidade
                if(this.data_is_ready === true){

                    // Tentativa de filtragem
                    try {
                        // Categoria-alvo
                        let target_category = this.$route.params.id;

                        // Para cada livro, seleciona aqueles com a categoria fornecida
                        if(target_category != null){
                            return this.books.filter(book => {
                                let categories = this.books_categories.filter(book_category => {
                                    return book_category.book === book.id; 
                                });
                                if(categories.length > 0){
                                    return categories.some(book_category => {
                                        return book_category.category == target_category;
                                    });
                                }
                                return false;
                            });
                        }
                        return [];
                    }

                    // Exceções
                    catch(_){
                        return [];
                    }
                }
                return [];
            }, 
        }, 
    }

</script>


<!-- .:::: STYLE ::::. -->
<style scoped>
    #container {
        width: 80%;
        margin-bottom: 4%;
    }
    h2 {
        margin-bottom: 2vh;
    }
</style>