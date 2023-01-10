# Desafio Frontend - Impulso Gov

Este repositório contém a resolução do Desafio Frontend do processo seletivo da empresa **Impulso Gov**.

Para solucionar o desafio, foi desenvolvida uma aplicação Web, utilizando `NextJS`, a partir de um protótipo do Figma e consumindo componentes do [Design System](https://www.npmjs.com/package/@impulsogov/design-system) da empresa.

> O conteúdo do arquivo `cities.js` foi disponibilizado pela **Impulso Gov** para a realização do desafio.

## Sumário

## Estrutura do repositório

A estrutura de diretórios do repositório é a seguinte:

```
root
├─ __tests__
├─ components
├─ data
├─ pages
├─ public
├─ styles
├─ utils
```

- \_\_tests\_\_: testes da aplicação
- components: componentes construídos para reutilização na aplicação
- data: dados não sensíveis usados na aplicação
- pages: páginas da aplicação
- public: imagens não sensíveis usadas na aplicação
- styles: arquivos de estilização da aplicação
- utils: funções auxiliares da aplicação

## Tecnologias

As tecnologias utilizadas para desenvolver a aplicação foram:

- `NextJS`: construção da aplicação
- `Tailwind CSS`: estilização da aplicação
- `Jest e React Testing Library`: criação de testes

## Executando a aplicação

Siga os passos abaixo para executar a aplicação:

1 - Clone este repositório

``` bash
git clone https://github.com/tainnaps/desafio-frontend-impulso-gov.git
```

2 - Entre no diretório raiz do repositório clonado

``` bash
cd desafio-frontend-impulso-gov
```

3 - **Dentro do diretório raiz (onde se encontra o arquivo `package.json`)**, instale as dependências

``` bash
npm install
```

3 - **Ainda no diretório raiz**, execute a aplicação em produção ou desenvolvimento

``` bash
# Produção
npm run build && npm start

# Desenvolvimento
npm run dev
```

4 - Acesse a aplicação inserindo a *url* abaixo em seu navegador web

``` bash
http://localhost:3000
```

⚠️ Caso a porta 3000 da sua máquina já esteja em uso, o `NextJS` alocará outra porta para a aplicação. Caso isso aconteça, insira no navegador a *url* que é disponibilizada no terminal após executar o **passo 3** desta seção.

## Executando os testes

Foram desenvolvidos testes unitários para os componentes da aplicação usando `jest` e `React Testing Library`.

Para executar os testes, use o seguinte comando **dentro do diretório raiz (onde se encontra o arquivo `package.json`)**:

``` bash
npm test
```

Caso prefira executar um arquivo de teste por vez, basta passar o caminho para o arquivo que deseja, da seguinte forma (**lembre-se de estar dentro do diretório raiz**):

``` bash
npm test __tests__/nomeDoArquivo.test.jsx
```
