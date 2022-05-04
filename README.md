# Sistema de e-Commerce de uma Livraria

Trabalho de finalização da disciplina de Introdução ao Desenvolvimento Web, SCC0219, primeiro semestre de 2022. Em suma, implementa todos os aspectos necessários a um site de e-commerce, incluindo gerenciamento de bases de dados e desenvolvimento fullstack, embora não armazene o projeto em um servidor dedicado.

# Relatório de Projeto

## 0. Colaboradores

- João Lucas Rodrigues Constantino, 11795763
- Gabriel Zanotim Manhani, 11912276
- Nathielle Cristhiny de Oliveira Pereira, 10390252

## 1. Requisitos

### 1.1. Usuários

- Os usuários do Sistema são divididos em duas categorias: administradores e clientes, em que aqueles são responsáveis pelo gerenciamento do estoque comercial e dos serviços disponibilizados, e estes são os usuários-alvo da plataforma — aos quais os produtos e serviços serão oferecidos.

- A todo usuário não cadastrado, deve ser permitido registrar uma conta de cliente, a qual deve receber os seguintes atributos no momento de cadastro: nome, senha, e-mail, endereço e telefone de contato, em que todos esses atributos podem ser alterados posteriormente na página de perfil. O Sistema deve, automaticamente, fornecer um número de identificação sintético (ID) ao cliente no momento de cadastro.

- A todo administrador, deve ser permitido a promoção de uma conta de cliente previamente cadastrada para uma conta de administração.

- A todo administrador, deve ser permitido realizar visualização, alteração, adição e remoção (CRUD) de produtos em estoque.

- A todo administrador, deve ser permitido realizar CRUD dos demais usuários.

- A todo usuário cadastrado, deve ser permitido realizar CRUD de seus meios de pagamento.

### 1.2. Páginas

- A todo usuário não cadastrado, deve ser permitido acessar as páginas de apresentação, de produto e de pesquisa, em que esta pode envolver uma categoria cadastrada ou uma busca textual por parte do usuário.

- A todo usuário cadastrado, deve ser permitido acessar as páginas de perfil, de carrinho e de finalização de compra.

- A todo administrador, deve ser permitido acessar a página de gerenciamento de estoque e a página de gerenciamento de usuários. Ainda, na página de gerenciamento de estoque, deve ser permitido acessar a página de gerenciamento do produto.

### 1.3. Produtos

- A todo produto, no momento de cadastro, devem ser fornecidos um nome e uma ou mais fotografias. Em sua seção de gerenciamento, podem ser adicionados um preço, uma quantia em estoque, uma descrição e demais características — incluindo acabamento, ano da edição, idioma de exibição e número de páginas. Além disso, o Sistema deve, automaticamente, fornecer um número de identificação sintético (ID) ao produto no momento de cadastro.

- O Sistema deve registrar estatísticas de venda do produto, incluindo quantia absoluta de vendas, disponibilizando-as na página de gerenciamento do produto.

- Todo produto deve pertencer a uma ou mais categorias, as quais devem ser adicionadas na página de gerenciamento do produto.

### 1.4. Processo de Compra/Venda

- Na página de produto, devem ser disponibilizadas interfaces para o cálculo de frete e para a compra.

- Ao comprar um produto por meio de sua página, caso o usuário seja cadastrado, uma instância dele deve ser adicionada ao carrinho — cuja atualização deve ser informada por meio de um mostrador de notificação —, e, em caso contrário, um pop-up deve ser apresentado — informando a necessidade de cadastro para prosseguir com a compra.

- Na página de carrinho, devem ser mostradas todas as instâncias de produto adicionadas; a cada instância, uma quantia de compra pode ser alterada — em que o mínimo é uma unidade, e o máximo é toda a quantia atualmente em estoque.

- Na página de carrinho, deve ser disponibilizada uma interface para a finalização de compra.

- Na página de finalização de compra, os detalhes da operação devem ser apresentados juntamente à escolha do meio de pagamento e das informações de endereço de entrega.

- O carrinho deve ser esvaziado somente após finalização da compra.

### 1.5. Meios de pagamento

- 

## 2. Descrição do projeto

- O projeto até então são mockups em html/css/js e figma de uma loja online de livros. Os mockups do figma foram feitos para o grupo utilizar de base, e em seguida adaptamos o projeto para html/css/js. Foram criados até o momento do Milestone 1 as páginas principal, da pesquisa, do usuário, de um livro e do carrinho. As páginas são semi-funcionais, possuindo botões e links entre elas, mas sem interação com um servidor. Será futuramente implementada tal interação, alem de melhorias na experiência do usuário e um sistema de acesso para administradores. O sistema para login também sera implementado mais adiante.
- Segue um diagrama de como se dá a interação dos usuários com o site até o momento, com alguns elementos que ainda estão sendo planejados.
![diagrama](https://cdn.discordapp.com/attachments/837153235163807755/967904076497059890/Diagrama.png)
- Segue o link para visualizar os mockups no figma para as páginas principal, de um livro e do carrinho: https://is.gd/VWvgkI
- Serão salvas no servidor as seguintes informações: informações do cliente/administrador(nome, id, endereço, telefone, email/nome, id, telefone, email), informações dos livros(nome, id, foto, descrição, preço, quantidade em estoque e quantidade vendida)

## 3. Comentários sobre o código

- JavaScript fora utilizado para reutilizar código HTML, o que torna a execução em ambiente local necessária para a visualização do projeto.

## 4. Planos de teste

-

## 5. Resultados de teste

-

## 6. Procedimentos de execução

- A fim de executar em ambiente local, faça o download do Node.js e o instale no sistema local. Em um terminal, execute "npm install http-server -g" para instalar os pacotes necessários; após término da instalação, ainda no terminal, navegue para o diretório contendo o projeto (final_assignment_idw-main) e execute "http-server" para iniciar o servidor em ambiente local. Por fim, em um navegador de internet, vá para "localhost:8080": por padrão, trata-se da porta em que a aplicação estará em execução. Clique em html/ e em seguida em pages/.  

## 7. Problemas identificados

- Problema de responsividade em ambientes variados: o BANNER na página principal fica um pouco deslocado para baixo em certos navegadores.

## 8. Comentários adicionais

- None.
