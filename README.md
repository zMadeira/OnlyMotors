# OnlyMotors
Projeto API - 5º Semestre com a empresa GSW para desenvolvimento de loja de veículos online.

#🎓Team  

**Scrum Master/Developer:** Guilherme Oliveira Pontes Alvarenga [LinkedIn](https://www.linkedin.com/in/guilherme-oliveira-14a9b8175/)

**Product Owner/Developer:** Pedro Cruz Oliveira Araújo [LinkedIn](https://www.linkedin.com/in/pedro-cruz77/)

**Developer:** Guilherme Madeira da Silveira [LikedIn](https://www.linkedin.com/in/guilherme-madeira-b317ab17b/)

**Developer:** Henrique Kenji Nawa  [LinkedIn](https://br.linkedin.com/in/henriquenawa)

**Developer:** João Pedro Rabello Brasil de Mecenas [LinkedIn](https://www.linkedin.com/in/joao-pedro-m-943a74b6)

**Developer:** Diego Rodrigo da Silva [LinkedIn](https://www.linkedin.com/in/diego-s-7a97a4186/)

**Developer:** Matheus Prestes Teodoro Alves [LinkedIn](https://www.linkedin.com/in/mateus-prestes-11569118a/)

**Developer:** Davi Silva Martins das Neves [LinkedIn](https://www.linkedin.com/in/davi-neves-a50573201/)


<hr>

# 📃Sprints
| Sprint                                                              | Data de Entrega |
| ------------------------------------------------------------------- | --------------- |
| [Kick-off do Projeto]() | 22 de agosto de 2021     |
| [Sprint 1]() | 19 de setembro de 2021     |
| [Sprint 2] | 10 de outubro de 2021     |
| [Sprint 3] | 07 de novembro de 2021     |
| [Sprint 4] | 28 de novembro de 2021 |
| [Apresentação Final] | 05 de dezembro de 2021 |
| [Feira de soluções] | 16 de dezembro de 2021 |


<hr>

<hr>

# 📆Entregas - Funcionalidades

 
| Sprint 1 - Protótipo CRUD de anúncios:                  | Conclusão|
| ------------------------------------------------------------------- | --------------- |
| Funcionalidades de CREATE e READ | OKAY |
| O usuário deve ser capaz de anunciar seu veículo através da plataforma. | OKAY |
| O anúncio deve estar visível para todos os usuários. | OKAY |
| O cadastro do anúncio deve estar disponível na base de dados. | OKAY |
| Desenho da Arquitetura aplicação. | OKAY |
| Documento de implantação | OKAY |
| Documento de estratégia de branchs/versionamento.   | OKAY |
| Documentação das APIs. | OKAY |
| Relatório com histórico de build automatizado.  | OKAY |


<hr>

| Sprint 2 - Protótipo de painel de anúncio - CRUD final de anúncios: | Conclusão |
| ------------------------------------------------------------------- | --------------- |
| Tela de cadastro para novos usuários. |  |
| Possibilidade de exclusão de cadastro. |  |
| Sistema de Login e Logout para usuários cadastrados.    |  |
| O usuário pode atualizar ou retirar um anúncio do ar - UPDATE e DELETE.    |  |
| Painel de gerenciamento de anúncios do usuário com informações particulares    |  |


<hr>

| Sprint 3 - Comunicação Cliente e Comprador:                                 | Conclusão |
| ------------------------------------------------------------------- | --------------- |
| Cadastro de anúncios a partir de um arquivo CSV. |  |
| Template de CSV disponibilizado pela aplicação. |  |
| Chat simples em tempo real entre cliente e comprador. |  |
| Atualização no painel para apresentar informações de contato |  |
| Pesquisa de anúncios. |  |


<hr>


 | Sprint 4 - Relatórios - Importação de arquivos:                                       | Conclusão |
| ------------------------------------------------------------------- | --------------- |
| Geração de relatório com anúncio - PDF com as informações. |  |
| Atualização da documentação conforme as entregas. |  |


<hr>
</br>

# Entrega - Sprint 1

# 💻 Telas do Sistema
</br>

## 1. Anúncios
<img src="https://i.imgur.com/p6Ba9ac.jpg" alt="drawing" width="300">

## 2. Menu lateral
<img src="https://i.imgur.com/IgmAPCT.jpg"
alt="drawing" width="300">

## 3. Inserir Anúncio
<img src="https://i.imgur.com/KKAkcNt.jpg"
alt="drawing" width="300">

## 4. Progresso de upload
<img src="https://i.imgur.com/mkpMr09.jpg"
alt="drawing" width="300">

## 5. Anúncio selecionado
<img src="https://i.imgur.com/s1iLHZn.jpg"
alt="drawing" width="300">
</br>
</br>

# ⌛ Funcionamento
</br>
<img src="https://i.imgur.com/M9OCMIN.gif" width="300">
</br>
</br>

# 🧰 Tecnologias
</br>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/Expo%20Go-black?style=for-the-badge&logo=expo&logoColor=white"> 
</br>
<img src="https://img.shields.io/badge/MongoDB-8bbf3d?style=for-the-badge&logo=MongoDB&logoColor=white  "> <img src="https://img.shields.io/badge/Node.js-8bbf3d?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/swagger-8bbf3d?style=for-the-badge&logo=swagger&logoColor=white"> 
</br>
</br>

# 📉 Burndown
</br>
<img src="https://i.imgur.com/i9cVdMf.png">
</br>
</br>

# ⚙️ Instruções de Instalação
</br>

<ul>
  <li><b>Frontend</b></li>
    <ul>
    <li><b>dependências do frontend</b></li> 
     Executar o comando:<br/>
     
  ```bash
  $ cd client
  $ npm install
  $ npm install --global expo-cli
  $ expo start
  ```
  </br>
    Alterar o endereço do server conforme o arquivo:</br>
    <a href="https://github.com/zMadeira/OnlyMotors/blob/develop/client/src/services/variaveis.js">variaveis.js</a>
  </ul>
</ul>

<ul>
  <li><b>Backend</b></li>
    <ul>
    <li><b>dependências do backend</b></li> 
     Executar o comando.<br/>
     
  ```bash
  $ cd server
  $ npm install
  $ npm start
  ```
</ul

<ul>
  <li><b>Banco de Dados</b></li>
    <ul>
    <li><b>dependências do BD</b></li> 
     Acessar o link para download:<br/>
     <a href="https://www.mongodb.com/try/download/community">MongoDB Community</a>
</ul>
