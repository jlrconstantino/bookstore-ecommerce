<!-- .:::: TEMPLATE ::::. -->
<template>
    <div>
        <p>Nome: {{user_data.name}}</p>
        <p>E-Mail: {{user_data.email}}</p>
        <p>Data de Nascimento: {{user_data.birth}}</p>
        <p>Telefone: {{user_data.tel}}</p>
    </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Acesso ao Vuex e à base de dados
    import store from '@/store/index.js';
    import { get_item } from '@/utils/local-storage-management';

    // Lógica local
    export default {

        // Nome do componente
        name: "ProfileData", 

        // Dados locais
        data() {
            return {
                user_data: {
                    id: 0, 
                    name: "", 
                    email: "", 
                    password: "", 
                    birth: "", 
                    tel: "", 
                    role: "customer", 
                }, 
            };
        }, 

        // Aquisição dos dados do usuário
        created() {
            get_item("user#" + store.state.user.id.toString()).then(res => {
                this.user_data = res;
            })
        }, 
    }

</script>


<!-- .:::: STYLE ::::. -->
<style>
</style>