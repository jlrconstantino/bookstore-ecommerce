# Final Assignment

Trabalho de finalização da disciplina de Introdução ao Desenvolvimento Web, primeiro semestre de 2022.

## Project Report

### 0. Members

- João Lucas Rodrigues Constantino, 11795763
- Gabriel Zanotim Manhani, 11912276
- Nathielle Cristhiny de Oliveira Pereira, 10390252

### 1. Requirements

- Node.js.

### 2. Project Description

- O projeto até então são mockups em html/css/js e figma de uma loja online de livros. Os mockups do figma foram feitos para o grupo utilizar de base, e em seguida adaptamos o projeto para html/css/js. Foram criados até o momento do Milestone 1 as páginas principal, da pesquisa, do usuário, de um livro e do carrinho. As páginas são semi-funcionais, possuindo botões e links entre elas, mas sem interação com um servidor. Será futuramente implementada tal interação, alem de melhorias na experiência do usuário e um sistema de acesso para administradores. O sistema para login também sera implementado mais adiante.
- Segue um diagrama de como se dá a interação dos usuários com o site até o momento, com alguns elementos que ainda estão sendo planejados.
![diagrama](https://cdn.discordapp.com/attachments/837153235163807755/967904076497059890/Diagrama.png)
- Segue o link para visualizar os mockups no figma para as páginas principal, de um livro e do carrinho: https://is.gd/VWvgkI
- Serão salvas no servidor as seguintes informações: informações do cliente/administrador(nome, id, endereço, telefone, email/nome, id, telefone, email), informações dos livros(nome, id, foto, descrição, preço, quantidade em estoque e quantidade vendida)

### 3. Comments About the Code

- JavaScript fora utilizado para reutilizar código HTML, o que torna a execução em ambiente local necessária para a visualização do projeto.

### 4. Test Plan

-

### 5. Test Results

-

### 6. Build Procedures

- A fim de executar em ambiente local, faça o download do Node.js e o instale no sistema local. Em um terminal, execute "npm install http-server -g" para instalar os pacotes necessários; após término da instalação, ainda no terminal, navegue para o diretório contendo o projeto (final_assignment_idw-main) e execute "http-server" para iniciar o servidor em ambiente local. Por fim, em um navegador de internet, vá para "localhost:8080": por padrão, trata-se da porta em que a aplicação estará em execução. Clique em html/ e em seguida em pages/.  

### 7. Problems

- Problema de responsividade em ambientes variados: o BANNER na página principal fica um pouco deslocado para baixo em certos navegadores.

### 8. Comments

- None.
