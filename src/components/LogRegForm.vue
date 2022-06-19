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
                placeholder="⋅⋅⋅"
                :class="{
                    'failed-input': !login_password_is_valid || login_password_is_empty, 
                    'normal-input': login_password_is_valid && !login_password_is_empty
                }">
            <p v-if="!login_password_is_valid" class="failed-input-text">A senha informada é inválida.</p>
            <p v-if="login_password_is_empty" class="failed-input-text">Este campo é obrigatório.</p>
            <a class="text-common-color hover-interaction-link-darker">Esqueceu sua senha?</a>

            <!-- Submit -->
            <button>Entrar</button>

        </div>

        <!-- Seção de cadastro -->
        <div id="right-container" class="container">

            <!-- Subtítulo -->
            <h2 class="subtitle">Cadastre-se</h2>

            <!-- Seção de nome -->
            <p class="text-darker-color">Nome</p>
            <input 
                type="text" 
                placeholder="" 
                :class="{
                    'failed-input': !name_is_valid || name_is_empty, 
                    'normal-input': name_is_valid && !name_is_empty
                }">
            <p v-if="!name_is_valid" class="failed-input-text">O nome informado é inválido.</p>
            <p v-if="name_is_empty" class="failed-input-text">Este campo é obrigatório.</p>

            <!-- Seção de e-mail -->
            <p class="text-darker-color">E-mail</p>
            <input 
                type="email" 
                placeholder="email@eee.com" 
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
                placeholder="⋅⋅⋅"
                :class="{
                    'failed-input': !reg_password_is_valid || reg_password_is_empty, 
                    'normal-input': reg_password_is_valid && !reg_password_is_empty
                }">
            <p v-if="!reg_password_is_valid" class="failed-input-text">A senha informada é inválida.</p>
            <p v-if="reg_password_is_empty" class="failed-input-text">Este campo é obrigatório.</p>

            <!-- Seção de data de nascimento -->
            <p class="text-darker-color">Data de nascimento</p>
            <input 
                type="date" 
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
                placeholder="(99)99999-9999"
                :class="{
                    'failed-input': !phone_is_valid || phone_is_empty, 
                    'normal-input': phone_is_valid && !phone_is_empty
                }">
            <p v-if="!phone_is_valid" class="failed-input-text">O telefone informado é inválido.</p>
            <p v-if="phone_is_empty" class="failed-input-text">Este campo é obrigatório.</p>
            
            <!-- Submit -->
            <button>Cadastrar</button>

        </div>
    </div>
</template>


<!-- .:::: SCRIPT ::::. -->
<script>

    // Lógica local
    export default {

        // Nome do componente
        name: "LogRegForm", 
        
        // Dados locais
        data() {
            return {
                
                // Controle de email de login
                login_email_is_valid: true, 
                login_email_is_empty: false, 

                // Controle de senha de login
                login_password_is_valid: true, 
                login_password_is_empty: false, 

                // Controle de nome de cadastro
                name_is_valid: true, 
                name_is_empty: false, 

                // Controle de email de cadastro
                reg_email_is_valid: true, 
                reg_email_is_empty: false, 

                // Controle de senha de cadastro
                reg_password_is_valid: true, 
                reg_password_is_empty: false, 

                // Controle de data de nascimento de cadastro
                birth_date_is_valid: true, 
                birth_date_is_empty: false, 

                // Controle de telefone de cadastro
                phone_is_valid: true, 
                phone_is_empty: false, 
            };
        }
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