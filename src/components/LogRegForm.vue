<!-- .:::: TEMPLATE ::::. -->
<template>
    <div id="main-container">

        <!-- Seção de login -->
        <div id="left-container" class="container">
            
            <!-- Subtítulo -->
            <h2 class="subtitle">Acesse sua conta</h2>
            
            <!-- Seção de e-mail -->
            <p class="text-darker-color">E-mail</p>
            <input 
                type="email" 
                placeholder="email@eee.com" 
                v-model="login_email"
                @keyup.enter="login()"
                :class="{
                    'failed-input': !login_email_is_valid || login_email_is_empty, 
                    'normal-input': login_email_is_valid && !login_email_is_empty
                }">
            <p v-if="!login_email_is_valid" class="failed-input-text">O e-mail informado é inválido.</p>
            <p v-if="login_email_is_empty" class="failed-input-text">Este campo é obrigatório.</p>

            <!-- Seção de senha -->
            <p class="text-darker-color">Senha</p>
            <input 
                type="password" 
                v-model="login_password"
                placeholder="⋅⋅⋅"
                @keyup.enter="login()"
                :class="{
                    'failed-input': !login_password_is_valid || login_password_is_empty, 
                    'normal-input': login_password_is_valid && !login_password_is_empty
                }">
            <p v-if="!login_password_is_valid" class="failed-input-text">A senha informada é inválida.</p>
            <p v-if="login_password_is_empty" class="failed-input-text">Este campo é obrigatório.</p>
            <a class="text-common-color hover-interaction-link-darker">Esqueceu sua senha?</a>

            <!-- Submit -->
            <button @click="login()" @keyup.enter="login()">Entrar</button>

        </div>

        <!-- Seção de cadastro -->
        <div id="right-container" class="container">

            <!-- Subtítulo -->
            <h2 class="subtitle">Cadastre-se</h2>

            <!-- Seção de nome -->
            <p class="text-darker-color">Nome</p>
            <input 
                type="text" 
                v-model="name"
                placeholder="" 
                @keyup.enter="register()"
                :class="{
                    'failed-input': !name_is_valid || name_is_empty, 
                    'normal-input': name_is_valid && !name_is_empty
                }">
            <p v-if="!name_is_valid" class="failed-input-text">O nome informado é inválido (deve conter somente letras).</p>
            <p v-if="name_is_empty" class="failed-input-text">Este campo é obrigatório.</p>

            <!-- Seção de e-mail -->
            <p class="text-darker-color">E-mail</p>
            <input 
                type="email" 
                v-model="reg_email"
                placeholder="email@eee.com" 
                @keyup.enter="register()"
                :class="{
                    'failed-input': !reg_email_is_valid || reg_email_is_empty, 
                    'normal-input': reg_email_is_valid && !reg_email_is_empty
                }">
            <p v-if="!reg_email_is_valid" class="failed-input-text">O e-mail informado é inválido.</p>
            <p v-if="reg_email_is_empty" class="failed-input-text">Este campo é obrigatório.</p>

            <!-- Seção de senha -->
            <p class="text-darker-color">Senha</p>
            <input 
                type="password" 
                v-model="reg_password"
                @keyup.enter="register()"
                placeholder="⋅⋅⋅"
                :class="{
                    'failed-input': !reg_password_is_valid || reg_password_is_empty, 
                    'normal-input': reg_password_is_valid && !reg_password_is_empty
                }">
            <p v-if="!reg_password_is_valid" class="failed-input-text">A senha deve conter, no mínimo, três caracteres.</p>
            <p v-if="reg_password_is_empty" class="failed-input-text">Este campo é obrigatório.</p>

            <!-- Seção de data de nascimento -->
            <p class="text-darker-color">Data de nascimento</p>
            <input 
                type="date" 
                v-model="birth_date"
                @keyup.enter="register()"
                placeholder="dd/mm/yyyy"
                :class="{
                    'failed-input': !birth_date_is_valid || birth_date_is_empty, 
                    'normal-input': birth_date_is_valid && !birth_date_is_empty
                }">
            <p v-if="!birth_date_is_valid" class="failed-input-text">A data informada é inválida.</p>
            <p v-if="birth_date_is_empty" class="failed-input-text">Este campo é obrigatório.</p>

            <!-- Seção de telefone -->
            <p class="text-darker-color">Telefone</p>
            <input 
                type="tel" 
                v-model="telephone"
                @keyup.enter="register()"
                placeholder="(99)99999-9999"
                :class="{
                    'failed-input': !telephone_is_valid || telephone_is_empty, 
                    'normal-input': telephone_is_valid && !telephone_is_empty
                }">
            <p v-if="!telephone_is_valid" class="failed-input-text">O telefone informado é inválido.</p>
            <p v-if="telephone_is_empty" class="failed-input-text">Este campo é obrigatório.</p>
            
            <!-- Submit -->
            <button @click="register()" @keyup.enter="register()">Cadastrar</button>

        </div>
    </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Para manipulação de base de dados local
    import { set_item, load_local_storage_users } from "../utils/local-storage-management.js";

    // Lógica local
    export default {

        // Nome do componente
        name: "LogRegForm", 
        
        // Dados locais
        data() {
            return { 

                // Usuários da base de dados
                users: null, 
                
                // Controle de email de login
                login_email: "", 
                login_email_is_valid: true, 
                login_email_is_empty: false, 

                // Controle de senha de login
                login_password: "", 
                login_password_is_valid: true, 
                login_password_is_empty: false, 

                // Controle de nome de cadastro
                name: "", 
                name_is_valid: true, 
                name_is_empty: false, 

                // Controle de email de cadastro
                reg_email: "", 
                reg_email_is_valid: true, 
                reg_email_is_empty: false, 

                // Controle de senha de cadastro
                reg_password: "", 
                reg_password_is_valid: true, 
                reg_password_is_empty: false, 

                // Controle de data de nascimento de cadastro
                birth_date: "", 
                birth_date_is_valid: true, 
                birth_date_is_empty: false, 

                // Controle de telefone de cadastro
                telephone: "", 
                telephone_is_valid: true, 
                telephone_is_empty: false, 
            };
        }, 

        // Leitura dos usuários da base de dados
        created() {
            load_local_storage_users().then(res => {
                this.users = res;
            });
        }, 

        // Métodos auxiliares
        methods: {

            // Validação de login
            validate_login() {

                // Para controle do resultado
                let output = true;
                let pattern = "";

                // Validação de e-mail
                if(this.login_email === ""){
                    this.login_email_is_empty = true;
                    this.login_email_is_valid = true;
                    output = false;
                }else{
                    this.login_email_is_empty = false;
                    /* eslint-disable */
                    pattern = new RegExp("^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+", "g");
                    /* eslint-enable */
                    if(pattern.test(this.login_email)){
                        this.login_email_is_valid = true;
                    }else{
                        this.login_email_is_valid = false;
                        output = false;
                    }
                }

                // Validação de senha (somente verificação de nulidade)
                if(this.login_password === ""){
                    this.login_password_is_empty = true;
                    output = false;
                }else{
                    this.login_password_is_empty = false;
                }

                return output;
            }, 

            // Realização de login
            login() {

                // Validação inicial
                if(this.validate_login() === true){

                    // Busca pelo usuário
                    let filtered_users = this.users.filter(user => {return user.email === this.login_email});
                    if(filtered_users.length > 0){

                        // Validação de senha
                        if(filtered_users[0].password === this.login_password){
                            this.login_password_is_valid = true;

                            // Login
                            this.$store.commit("set_user", filtered_users[0]);
                        }
                        
                        // Senha inválida
                        else{
                            this.login_password_is_valid = false;
                        }
                    }else{
                        this.login_password_is_valid = false;
                    }
                }
            }, 

            // Validação de registro
            validate_register() {

                // Para controle do resultado
                let output = true;
                let pattern = "";

                // Validação de nome
                if(this.name === ""){
                    this.name_is_empty = true;
                    this.name_is_valid = true;
                    output = false;
                }else{
                    this.name_is_empty = false;
                    pattern = new RegExp("^[a-zA-Z ]+$", "g");
                    if(pattern.test(this.name)){
                        this.name_is_valid = true;
                    }else{
                        this.name_is_valid = false;
                        output = false;
                    }
                }

                // Validação de e-mail
                if(this.reg_email === ""){
                    this.reg_email_is_empty = true;
                    this.reg_email_is_valid = true;
                    output = false;
                }else{
                    this.reg_email_is_empty = false;
                    /* eslint-disable */
                    pattern = new RegExp("^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+", "g");
                    /* eslint-enable */
                    if(pattern.test(this.reg_email)){
                        this.reg_email_is_valid = true;
                    }else{
                        this.reg_email_is_valid = false;
                        output = false;
                    }
                }

                // Validação de senha
                if(this.reg_password === ""){
                    this.reg_password_is_empty = true;
                    this.reg_password_is_valid = true;
                    output = false;
                }else{
                    this.reg_password_is_empty = false;
                    if(this.reg_password.length >= 3){
                        this.reg_password_is_valid = true;
                    }else{
                        this.reg_password_is_valid = false;
                        output = false;
                    }
                }

                // Validação de data de nascimento
                if(this.birth_date === ""){
                    this.birth_date_is_empty = true;
                    this.birth_date_is_valid = true;
                    output = false;
                }else{
                    this.birth_date_is_empty = false;
                    /* eslint-disable */
                    pattern = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$", "g");
                    /* eslint-enable */
                    if(pattern.test(this.birth_date)){
                        this.birth_date_is_valid = true;
                    }else{
                        this.birth_date_is_valid = false;
                        output = false;
                    }
                }

                // Validação de telefone
                if(this.telephone === ""){
                    this.telephone_is_empty = true;
                    this.telephone_is_valid = true;
                    output = false;
                }else{
                    this.telephone_is_empty = false;
                    /* eslint-disable */
                    pattern = new RegExp("[0-9]+", "g");
                    /* eslint-enable */
                    if(pattern.test(this.telephone)){
                        this.telephone_is_valid = true;
                    }else{
                        this.telephone_is_valid = false;
                        output = false;
                    }
                }

                return output;
            }, 

            // Cadastro de uma nova conta
            register() {

                // Validação
                if(this.validate_register()){

                    // Criação da nova conta
                    let new_user = {
                        id: this.users.length, 
                        name: this.name, 
                        email: this.reg_email, 
                        password: this.reg_password, 
                        birth: this.birth_date, 
                        tel: this.tel, 
                        role: "customer", 
                    };

                    // Adição da nova conta
                    set_item("user#" + this.users.length, new_user);

                    // Atualização dos usuários
                    this.users.push(new_user);

                    // Login
                    this.$store.commit("set_user", new_user);
                }
            }, 

        }, 
    }

</script>


<!-- .:::: STYLE ::::. -->
<style scoped>

    @import "../css/colors.css";
    @import "../css/global-style.css";

    /* Contêineres */
    #main-container {
        margin-top: 0;
        display: block;
        width: 80%;
        height: auto;
        border: var(--box-border);
        border-radius: 5px;
    }
    .container {
        width: calc(49% - 2rem);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    #left-container {
        float: left;
    }
    #right-container {
        float: right;
        padding-left: 2rem;
        border-left: var(--box-border);
    }

    /* Subtítulo */
    .subtitle {
        font-size: 1.8rem;
        margin-bottom: 1.8rem;
    }

    /* Texto */
    p {
        font-size: 1rem;
        margin-bottom: 0.3rem;
    }

    /* Formulário */
    input {
        font-size: 1.0rem;
        width: 70%;
        height: 1.5rem;
        padding: 5px;
        border: var(--box-border);
        box-shadow: var(--box-shadow-minimized);
        border-radius: 5px;
        margin-bottom: 5px;
    }
    .normal-input{
        margin-bottom: 1.0rem;
    }
    .failed-input {
        border: var(--box-red-border);
        color: rgba(221, 52, 52, 0.9);
    }
    .failed-input-text {
        color: rgba(221, 52, 52, 0.9);
        margin-bottom: 1rem;
    }

    /* Botão */
    button {
        width: auto;
        min-width: 30%;
        height: 2.2rem;
        background-color: var(--foreground-color);
        color: antiquewhite;
        text-transform: uppercase;
        font-size: 1.2rem;
        border-radius: 4px;
        border: none;
        margin-bottom: 1rem;
        margin-top: 1.5rem;
        transition-duration: 0.1s;
        transition-timing-function: linear;
    }
    button:hover {
        color: gray;
        background-color: white;
        border: 2px solid var(--foreground-color);
    }

</style>