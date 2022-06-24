<!-- .:::: TEMPLATE ::::. -->
<template>
    <div>
        <!-- Nome -->
        <h2>Nome</h2>
        <p class="info-container normal-input-text" v-if="!updating_data">{{user_data.name}}</p>
        <input 
            v-model="user_data.name" 
            type="text" 
            class="info-container text" 
            v-if="updating_data"
            :class="{'normal-input-text': name_is_valid && !name_is_empty}">
        <p v-if="!name_is_valid" class="failed-input-text">O nome informado é inválido (deve conter somente letras).</p>
        <p v-if="name_is_empty" class="failed-input-text">Este campo é obrigatório.</p>

        <!-- E-Mail -->
        <h2>E-Mail</h2>
        <p class="info-container normal-input-text" v-if="!updating_data">{{user_data.email}}</p>
        <input 
            v-model="user_data.email" 
            type="email" 
            class="info-container text" 
            v-if="updating_data"
            :class="{'normal-input-text': email_is_valid && !email_is_empty}">
        <p v-if="!email_is_valid" class="failed-input-text">O e-mail informado é inválido.</p>
        <p v-if="email_is_empty" class="failed-input-text">Este campo é obrigatório.</p>
        
        <!-- Data de Nascimento -->
        <h2>Data de Nascimento</h2>
        <p class="info-container normal-input-text" v-if="!updating_data">{{user_data.birth}}</p>
        <input 
            v-model="user_data.birth" 
            type="date" 
            class="info-container text" 
            v-if="updating_data"
            :class="{'normal-input-text': birth_date_is_valid && !birth_date_is_empty}">
        <p v-if="!birth_date_is_valid" class="failed-input-text">A data informada é inválida.</p>
        <p v-if="birth_date_is_empty" class="failed-input-text">Este campo é obrigatório.</p>

        <!-- Telefone -->
        <h2>Telefone</h2>
        <p class="info-container normal-input-text" v-if="!updating_data">{{user_data.tel}}</p>
        <input 
            v-model="user_data.tel" 
            type="tel" 
            class="info-container text" 
            v-if="updating_data"
            :class="{'normal-input-text': telephone_is_valid && !telephone_is_empty}">
        <p v-if="!telephone_is_valid" class="failed-input-text">O telefone informado é inválido.</p>
        <p v-if="telephone_is_empty" class="failed-input-text">Este campo é obrigatório.</p>

        <!-- Confirmar senha -->
        <div v-if="updating_data">
            <h2>Confirme sua Senha</h2>
            <input 
                v-model="input_password" 
                placeholder="⋅⋅⋅"
                type="password" 
                class="info-container text"
                :class="{'normal-input-text': password_is_valid && !password_is_empty}">
            <p v-if="!password_is_valid" class="failed-input-text">A senha informada é inválida.</p>
            <p v-if="password_is_empty" class="failed-input-text">Este campo é obrigatório.</p>
        </div>
            
        <!-- Alterar -->
        <button @click="updating_data = true" v-if="!updating_data" class="standard-button">Alterar Dados</button>
        <button @click="update_data()" v-if="updating_data" class="standard-button">Salvar Alterações</button>
    </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Acesso ao Vuex e à base de dados
    import store from '@/store/index.js';
    import { get_item, set_item } from '@/utils/local-storage-management';

    // Lógica local
    export default {

        // Nome do componente
        name: "ProfileData", 

        // Dados locais
        data() {
            return {

                // Dados do usuário
                user_data: {
                    id: 0, 
                    name: "", 
                    email: "", 
                    password: "", 
                    birth: "", 
                    tel: "", 
                    role: "customer", 
                }, 

                // Para controlar habilitação de alterações
                updating_data: false, 

                // Controle de nome de alteração
                name_is_valid: true, 
                name_is_empty: false, 

                // Controle de email de alteração
                email_is_valid: true, 
                email_is_empty: false, 

                // Controle de data de nascimento de alteração
                birth_date_is_valid: true, 
                birth_date_is_empty: false, 

                // Controle de telefone de alteração
                telephone_is_valid: true, 
                telephone_is_empty: false, 

                // Controle de senha
                input_password: "", 
                password_is_valid: true, 
                password_is_empty: false, 
            };
        }, 

        // Aquisição dos dados do usuário
        created() {
            get_item("user#" + store.state.user.id.toString()).then(res => {
                this.user_data = res;
            })
        }, 

        // Métodos auxiliares
        methods: {

            // Validação de alterações
            validate_updates() {

                // Para controle do resultado
                let output = true;
                let pattern = "";

                // Validação de nome
                if(this.user_data.name === ""){
                    this.name_is_empty = true;
                    this.name_is_valid = true;
                    output = false;
                }else{
                    this.name_is_empty = false;
                    pattern = new RegExp("^[a-zA-Z ]+$", "g");
                    if(pattern.test(this.user_data.name)){
                        this.name_is_valid = true;
                    }else{
                        this.name_is_valid = false;
                        output = false;
                    }
                }

                // Validação de e-mail
                if(this.user_data.email === ""){
                    this.email_is_empty = true;
                    this.email_is_valid = true;
                    output = false;
                }else{
                    this.email_is_empty = false;
                    /* eslint-disable */
                    pattern = new RegExp("^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+", "g");
                    /* eslint-enable */
                    if(pattern.test(this.user_data.email)){
                        this.email_is_valid = true;
                    }else{
                        this.email_is_valid = false;
                        output = false;
                    }
                }

                // Validação de senha
                if(this.input_password === ""){
                    this.password_is_empty = true;
                    this.password_is_valid = true;
                    output = false;
                }else{
                    this.password_is_empty = false;
                    if(this.input_password.length >= 3){
                        this.password_is_valid = true;
                    }else{
                        this.password_is_valid = false;
                        output = false;
                    }
                }

                // Validação de data de nascimento
                if(this.user_data.birth === ""){
                    this.birth_date_is_empty = true;
                    this.birth_date_is_valid = true;
                    output = false;
                }else{
                    this.birth_date_is_empty = false;
                    /* eslint-disable */
                    pattern = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$", "g");
                    /* eslint-enable */
                    if(pattern.test(this.user_data.birth)){
                        this.birth_date_is_valid = true;
                    }else{
                        this.birth_date_is_valid = false;
                        output = false;
                    }
                }

                // Validação de telefone
                if(this.user_data.tel === ""){
                    this.telephone_is_empty = true;
                    this.telephone_is_valid = true;
                    output = false;
                }else{
                    this.telephone_is_empty = false;
                    /* eslint-disable */
                    pattern = new RegExp("[0-9]+", "g");
                    /* eslint-enable */
                    if(pattern.test(this.user_data.tel)){
                        this.telephone_is_valid = true;
                    }else{
                        this.telephone_is_valid = false;
                        output = false;
                    }
                }

                return output;
            }, 

            // Atualização dos dados
            update_data() {
                if(this.validate_updates()) {
                    if(this.input_password === this.user_data.password){
                        this.password_is_valid = true;
                        set_item("user#" + this.user_data.id.toString(), this.user_data);
                        this.updating_data = false;
                    }else{
                        this.password_is_valid = false;
                    }
                }
            }, 
        }, 
    }

</script>


<!-- .:::: STYLE ::::. -->
<style scoped>

    @import "../css/colors.css";

    /* Texto */
    h2 {
        font-size: 2.0rem;
        color: var(--text-common-color);
        margin-bottom: 1.0rem;
    }

    /* Containers de informação */
    .info-container {
        width: calc(100% - 2rem);
        border: 0;
        border-left: 4px ridge var(--review-text-color);
        padding: 1rem;
        background-color: var(--navigation-bar-background-color);
        color: var(--text-common-color);
    }

    /* Botão */
    button {
        font-size: 1.2rem;
        height: 2.4rem;
        width: auto;
        min-width: 30%;
    }

    /* Textos normal e indicador de falhas */
    .normal-input-text {
        margin-bottom: 2.0rem;
    }
    .failed-input-text {
        color: rgba(221, 52, 52, 0.9);
        margin-bottom: 1rem;
    }

</style>