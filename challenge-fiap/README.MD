# Sistema de Mecânica - Porto Seguro

Este projeto é um sistema de mecânica desenvolvido para a **Porto Seguro**, onde os usuários podem se cadastrar, fazer login, cadastrar veículos e agendar serviços de manutenção. O front-end foi desenvolvido em **Next.js** com integração ao back-end através de **APIs REST** escritas em **Java**, que se conectam a um banco de dados **Oracle**.

## Funcionalidades

O sistema oferece as seguintes funcionalidades:

- **Cadastro de Usuário:** Permite que os usuários criem uma conta no sistema.
- **Login:** Autenticação dos usuários cadastrados no sistema.
- **Cadastro de Veículo:** Os usuários podem cadastrar seus veículos fornecendo informações como placa, marca, modelo, ano, renavam e CPF.
- **Agendamento de Serviços:** Os usuários podem agendar serviços de manutenção em centros automotivos parceiros da Porto Seguro.

## Tecnologias Utilizadas

### Front-end

- **Next.js**: Framework React para criação de interfaces e rotas.
- **Tailwind CSS**: Framework CSS para estilização.
- **TypeScript**: Linguagem de tipagem estática para maior robustez.
- **Next.js App Router**: Utilizado para gerenciamento de rotas no projeto.
- **Google Fonts**: Usado para importar e aplicar fontes ao design do site.

### Back-end

- **Java**: Usado para a criação de APIs RESTful.
- **Jakarta Grizzly**: Framework para a criação de servidores HTTP em Java.
- **Oracle Database**: Banco de dados utilizado para armazenar as informações dos usuários, veículos e agendamentos.

### Integrações

- **Google Gemini API**: Integrado para análise de problemas automotivos e geração de pré-diagnóstico para os veículos dos usuários.

## Estrutura do Projeto

### Front-end

O front-end do projeto está estruturado utilizando o **Next.js** com Tailwind CSS para estilização. O App Router gerencia as rotas de todas as páginas, como o cadastro de veículos, agendamento e login.

A comunicação com o back-end é feita através de chamadas às APIs REST desenvolvidas em Java.

### Back-end

O back-end está desenvolvido em Java utilizando **Jakarta Grizzly** para criação das APIs que manipulam os dados no banco de dados Oracle. Ele expõe endpoints para:
- Cadastro de usuários.
- Login de usuários.
- Cadastro de veículos.
- Agendamento de serviços de manutenção.

## Instalação e Configuração

### Requisitos

- **Node.js**: Para rodar o front-end (Next.js).
- **Java JDK**: Para rodar o back-end.
- **Oracle Database**: Para armazenar os dados do sistema.
- **Tailwind CSS**: Para a estilização do front-end.

### Configuração do Front-end

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Navegue até a pasta do projeto:

   ```bash
   cd seu-projeto

3. Instale as dependências::

   ```bash
   npm install

4. Execute o projeto:

   ```bash
   npm run dev