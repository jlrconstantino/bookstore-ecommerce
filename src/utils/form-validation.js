// Necessário para a manipulação da base de dados
import { select_user_by_email, select_user_by_id } from "./database-management";

/** 
 * Valida um atributo via máscara REGEX. Retorna valor verdadeiro caso 
 * seja bem-sucedido, e valor falso em caso contrário
 * 
 * Parâmetros:
 * ----------
 * master: referência para o objeto contendo os atributos.
 * attribute: valor do atributo a ser validado.
 * regex_parser: instância de RegExp a ser utilizado.
 * empty: nome do campo de "master" contendo a diretiva de verificação de atributo vazio.
 * valid: nome do campo de "master" contendo a diretiva de verificação de atributo válido.
 * 
*/
export function validate_attribute_by_regex(master, attribute, regex_parser, empty, valid) {

    // Para controle de retorno
    let output = true;

    // Verificação de campo vazio
    if(attribute !== "") {
        master[empty] = false;

        // Verificação de máscara REGEX
        if(regex_parser.test(attribute)){
            master[valid] = true;
        }

        // REGEX falhou
        else {
            master[valid] = false;
            output = false;
        }
    }

    // Campo vazio
    else {
        master[empty] = true;
        master[valid] = true;
        output = false;
    }

    return output;
}


/** 
 * Valida um atributo opcional via máscara REGEX. Retorna valor verdadeiro caso 
 * seja bem-sucedido, e valor falso em caso contrário
 * 
 * Parâmetros:
 * ----------
 * master: referência para o objeto contendo os atributos.
 * attribute: valor do atributo a ser validado.
 * regex_parser: instância de RegExp a ser utilizado.
 * valid: nome do campo de "master" contendo a diretiva de verificação de atributo válido.
 * 
*/
export function validate_optional_attribute_by_regex(master, attribute, regex_parser, valid) {

    // Para controle de retorno
    let output = true;

    // Verificação de campo vazio
    if(attribute !== "") {

        // Verificação de máscara REGEX
        if(regex_parser.test(attribute)){
            master[valid] = true;
        }

        // REGEX falhou
        else {
            master[valid] = false;
            output = false;
        }
    }

    return output;
}


/** 
 * Valida um atributo via função callback. Retorna valor verdadeiro caso 
 * seja bem-sucedido, e valor falso em caso contrário
 * 
 * Parâmetros:
 * ----------
 * master: referência para o objeto contendo os atributos.
 * attribute: valor do atributo a ser validado.
 * callback: função de callback a ser testada; deve retornar valor booleano.
 * empty: nome do campo de "master" contendo a diretiva de verificação de atributo vazio.
 * valid: nome do campo de "master" contendo a diretiva de verificação de atributo válido.
 * 
*/
export function validate_attribute_by_callback(master, attribute, callback, empty, valid) {

    // Para controle de retorno
    let output = true;

    // Verificação de campo vazio
    if(attribute !== "") {
        master[empty] = false;

        // Verificação por callback
        if(callback(attribute)){
            master[valid] = true;
        }

        // Callback falhou
        else {
            master[valid] = false;
            output = false;
        }
    }

    // Campo vazio
    else {
        master[empty] = true;
        master[valid] = true;
        output = false;
    }

    return output;
}


/** 
 * Valida uma senha a partir da base de dados, retornando verdadeiro 
 * se for bem-sucedido, e falso em caso contrário.
 * 
 * Parâmetros:
 * ----------
 * user_email: na base de dados, o e-mail de usuário a ser buscado.
 * password: senha a ser validada.
 * 
*/
export async function validate_password_by_email(user_email, password) {

    // Obtém a senha do usuário
    try{
        let actual_password = null;
        await select_user_by_email(user_email).then(res => {
            if(res != null){
                actual_password = res.password;
            }else{
                throw "Ocorreu um erro ao tentar comunicação com a base de dados. Por favor, tente novamente.";
            }
        });

        // Verifica correspondência das senhas
        if(actual_password != null && actual_password === password){
            return true;
        }
    }

    // Erro de consulta
    catch(_){
        throw "Ocorreu um erro ao tentar comunicação com a base de dados. Por favor, tente novamente.";
    }

    return false;
}


/** 
 * Valida uma senha a partir da base de dados, retornando verdadeiro 
 * se for bem-sucedido, e falso em caso contrário.
 * 
 * Parâmetros:
 * ----------
 * user_id: na base de dados, o ID de usuário a ser buscado.
 * password: senha a ser validada.
 * 
*/
export async function validate_password_by_id(user_id, password) {

    // Obtém a senha do usuário
    try{
        let actual_password = null;
        await select_user_by_id(user_id).then(res => {
            if(res != null){
                actual_password = res.password;
            }else{
                throw "Ocorreu um erro ao tentar comunicação com a base de dados. Por favor, tente novamente.";
            }
        });

        // Verifica correspondência das senhas
        if(actual_password != null && actual_password === password){
            return true;
        }
    }

    // Erro de consulta
    catch(_){
        throw "Ocorreu um erro ao tentar comunicação com a base de dados. Por favor, tente novamente.";
    }

    return false;
}