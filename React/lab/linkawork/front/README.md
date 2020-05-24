# Linkawork

Sistema para treinamento, seleção e gerenciamento de colaboradores, focado na gestão por competências

* ### [📲Front-end](#frontend)
    - ### [Comandos básicos](#comandos-front)
    - ### [📁Estrutura do projeto](#front-end-estrutura)
* ### [🔧Back-end](#backend)
    - ### [Comandos básicos](#comandos-front)
    - ### [📁Estrutura do projeto](#back-end-estrutura)
    - ### [✅Testes unitários](#testes-unitarios-back)

## 📲Front-end
Guia para desenvolvimento front-end

### Comandos básicos
Instalar todos os módulos do projeto

    npm install

Rodar projeto

    npm start

### 📁Estrutura do projeto

    📁src
        📁@linka -> Componentes padrões do projeto
            📁forms -> Componentes de forms para Formsy
        📁app
            📁components -> Componentes do projeto
            📁pages -> Componentes de páginas
            📁routes -> Monta as rotas automaticamente
        📁assets -> Arquivos de imagens, icones, videos, etc.
            📁images -> Imagens que o projeto utiliza
        📁store -> Arquivos de Redux
            📁actions -> Actions de redux
            📁reducers -> Reducers de redux
        📝App.js -> Componente pai do projeto
        📝index.js -> Render do react
        📝routes.js -> Configuração de rotas e menus
        📝utils.js -> Funções uteis, validadores, etc..

## 🔧Back-end
Guia para desenvolvimento back-end

### Comandos básicos
Instalar todos os módulos do projeto

    npm install

Rodar projeto

    nodemon app.js
    ou
    node app.js



### 📁Estrutura do projeto

    📁server
        📁config -> Arquivos de configuração do projeto
        📁database
            📁models -> Estrutura do banco para sequelize
        📁graphql -> resolvers para graphql
        📁models -> Modelo do banco em Sequelize
            📁validations -> Validadores personalizados para sequelize
        📁schemas -> Schema graphql, inputs, querys, mutations...
        📁tests -> Arquivos de testes unitários
        📝app.js -> Arquivo index do projeto, ele quem deve ser executado

### ✅Testes unitários
Os testes automatizados são realizados utilizando [Jest](https://jestjs.io)
