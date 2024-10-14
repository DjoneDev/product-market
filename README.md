# product-market

Aplicação web simples com catálogo de produtos e integração do Google Tag Manager para rastreamento de eventos.


## Funcionalidades Principais

- Listagem de produtos (Vue.js frontend)
- Busca de produtos
- API backend (Node.js) para dados de produtos
- Integração com Google Tag Manager

## Instalação Rápida

1. Clone o repositório
2. Instale dependências:
    ```
    npm install 
    npm install -g @vue/cli
    npm install axios
    npm install express
    ```
3. Inicie o servidor: `npm run serve`
4. Inicie nodemon para rodar o backend: `npm run dev`
4. Abra `http://localhost:8080/` no navegador

## Estrutura

- `server.js`: Servidor backend
- `App.vue`: Frontend Vue.js
- `server.js`: Dados dos produtos

## Configuração GTM

1. Crie conta no Google Tag Manager
2. Substitua o script GTM no `index.html`
3. Configure tags para eventos no painel GTM
