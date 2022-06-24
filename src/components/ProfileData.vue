<!-- .:::: TEMPLATE ::::. -->
<template>

    <!-- Informações -->
    <h2 v-if="!updating_data && !updating_security">Informações</h2>
    <button @click="start_data_updates()" v-if="!updating_data && !updating_security" class="standard-button">Alterar Dados</button>
    <div v-if="updating_data">

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
            
        <!-- Alterar dados pessoais -->
        <div v-if="updating_data" class="update-buttons-section">
            <button @click="update_data()" class="standard-button">Salvar Alterações</button>
            <button @click="cancel_data_updates(true)" class="gray-button">Cancelar</button>
        </div>
    </div>

    <!-- Segurança -->
    <h2 v-if="!updating_security && !updating_data" class="top-label-with-margin">Segurança</h2>
    <button @click="start_security_updates()" v-if="!updating_security && !updating_data" class="standard-button">Alterar Senha</button>
    <div v-if="updating_security">

        <!-- Senha antiga -->
        <h2>Senha Anterior</h2>
        <input 
            v-model="old_password" 
            placeholder="⋅⋅⋅"
            type="password" 
            class="info-container text"
            :class="{'normal-input-text': old_password_is_valid && !old_password_is_empty}">
        <p v-if="!old_password_is_valid" class="failed-input-text">A senha informada é inválida.</p>
        <p v-if="old_password_is_empty" class="failed-input-text">Este campo é obrigatório.</p>

        <!-- Nova Senha -->
        <h2>Nova Senha</h2>
        <input 
            v-model="new_password" 
            placeholder="⋅⋅⋅"
            type="password" 
            class="info-container text"
            :class="{'normal-input-text': new_password_is_valid && !new_password_is_empty}">
        <p v-if="!new_password_is_valid" class="failed-input-text">A senha informada é inválida.</p>
        <p v-if="new_password_is_empty" class="failed-input-text">Este campo é obrigatório.</p>

        <!-- Botões de alteração -->
        <div class="update-buttons-section">
            <button @click="update_security()" class="standard-button">Salvar Senha</button>
            <button @click="cancel_security_updates(true)" class="gray-button">Cancelar</button>
        </div>

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
                updating_security: false, 

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

                // Controle de senha (dados pessoais)
                input_password: "", 
                password_is_valid: true, 
                password_is_empty: false, 

                // Controle de senha (segurança)
                old_password: "", 
                new_password: "", 
                old_password_is_valid: true, 
                old_password_is_empty: false, 
                new_password_is_valid: true, 
                new_password_is_empty: false, 
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

            // Inicializa as alterações dos dados pessoais
            start_data_updates() {
                this.updating_data = true;
                if(this.updating_security === true){
                    this.cancel_security_updates();
                }
            }, 

            // Validação de alterações dos dados pessoais
            validate_data_updates() {

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

            // Atualização dos dados pessoais
            update_data() {

                // Cancela possíveis atualizações de segurança
                if(this.update_security === true){
                    this.cancel_security_updates(false);
                }

                // Valida os dados pessoais
                if(this.validate_data_updates()) {

                    // Verifica a senha fornecida
                    if(this.input_password === this.user_data.password){
                        
                        // Controle
                        this.password_is_valid = true;
                        this.updating_data = false;
                        this.input_password = "";
                        
                        // Modificação do usuário
                        set_item("user#" + this.user_data.id.toString(), this.user_data);
                        this.$store.commit("set_user", this.user_data);

                        // Informa ao usuário
                        alert("Dados pessoais atualizados com sucesso.");
                    }
                    
                    // Senha inválida
                    else{
                        this.password_is_valid = false;
                    }
                }
            }, 

            // Cancela as atualizações dos dados pessoais
            cancel_data_updates(scroll) {
                get_item("user#" + store.state.user.id.toString()).then(res => {
                    this.user_data = res;
                })
                this.updating_data = false;
                if(scroll === true){
                    window.scrollTo(0,60);
                }
            }, 

            // Inicializa as alterações de segurança
            start_security_updates() {
                this.updating_security = true;
                if(this.updating_data === true){
                    this.cancel_data_updates();
                }
            }, 

            // Valida as informações de segurança
            validate_security() {

                // Para controle do resultado
                let output = true;

                // Validação da senha antiga
                if(this.old_password === ""){
                    this.old_password_is_empty = true;
                    this.old_password_is_valid = true;
                    output = false;
                }else{
                    this.old_password_is_empty = false;
                    if(this.old_password.length >= 3){
                        this.old_password_is_valid = true;
                    }else{
                        this.old_password_is_valid = false;
                        output = false;
                    }
                }

                // Validação da nova senha
                if(this.new_password === ""){
                    this.new_password_is_empty = true;
                    this.new_password_is_valid = true;
                    output = false;
                }else{
                    this.new_password_is_empty = false;
                    if(this.new_password.length >= 3){
                        this.new_password_is_valid = true;
                    }else{
                        this.new_password_is_valid = false;
                        output = false;
                    }
                }

                return output;
            }, 

            // Atualiza a senha
            update_security() {

                // Cancela possíveis atualizações de dados pessoais em andamento
                if(this.update_data === true){
                    this.cancel_data_updates(false);
                }

                // Validação das senhas fornecidas
                if(this.validate_security()) {
                    if(this.old_password === this.user_data.password){

                        // Controle
                        this.updating_security = false;
                        this.old_password_is_valid = true;
                        this.user_data.password = this.new_password;
                        this.old_password = "";
                        this.new_password = "";

                        // Modificação do usuário
                        set_item("user#" + this.user_data.id.toString(), this.user_data);

                        // Informa ao usuário
                        alert("Nova senha cadastrada com sucesso.");
                    }
                    
                    // Senha inválida
                    else{
                        this.old_password_is_valid = false;
                    }
                }
            }, 

            // Cancela as alterações de segurança
            cancel_security_updates(scroll) {
                this.updating_security = false;
                if(scroll === true){
                    window.scrollTo(0,60);
                }
            }, 
        }, 
    }

</script>


<!-- .:::: STYLE ::::. -->
<style>
    @import "../css/profile-form.css";
</style>