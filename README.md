# venturelabs
Projeto de desafio técnico para empresa VentureLabs

Obejtivo de desenvolver uma aplicação React que crie usuários e liste os usuários criados.

A aplicação pode ser acessada no link: https://bruno-s-mendes.github.io/venturelabs/

Para criar esta aplicação eu utilizei React, Redux e Tailwind.

---

# Sumário

- [Como Executar](#Como-Executar)
- [Lista de Requisitos](#Requisitos)
- [Desenvolvimento](#Desenvolvimento)

# Como Executar

  Este repositório pode ser clonado em seu computador e executado localmente, para isso siga os seguintes passos:

    1- Crie um diretório em seu computador;
    2- Entre no diretorio criado pelo terminal;
    3- Clone o repositório com o seguinte comando:
        git clone git@github.com:bruno-s-mendes/venturelabs.git
    4- Entre no diretório do desafio pelo terminal, para isso rode o comando:
        cd venturelabs/client-app/
    5- Instale as dependencias do front-end, para isso rode o comando:
        npm instal;
    6- inicie a aplicação front-end, para isso rode o comando:
        npm start;

    A aplicação deve abrir em seu navegador. Caso tenha alguma dúvida não hesite em me contatar no email: mendessbruno@gmail.com


# Requisitos:

### 1 - Criar um menu lateral

### 2 - criar seçao para adicionar novos clientes
  
  Esta seção é dividida em 3 partes, com formularios para adicionar informações do cliente:
  
  - seção 1:
    - Nome
    - Sobrenome
    - E-mail
    - Telefone
    - Próximo (botão)
      
  - seção 2:
    - CEP
    - Endereço 1
    - Endereço 2
    - Próximo (botão)
      
  - seção 3:
    - Data Nascimento
    - CPF
    - Renda Mensal
    - Salvar (botão)

### 3 - Criar uma seção para listar os usuários cadastrados

  Nessa lista deve aparecer apenas o nome do usuário e quando se clica no nome, as demais infirmações devem aparecer

# Desenvolvimento 
 Para o desenvolvimento deste projeto, eu iniciei definindo como seria a estrutura da aplicação, escolhi utilizar redux e o tailwind e fiz a instalção das bibliotecas necessarias.
 
 Após a instalação, dividi a aplicação em 3 componentes (menu lateral, cadastro e lista) e iniciei o desenvolvimento de cada componente. cnforme foram susrgindo as necessidades utilizei os estados de cada componentes para salvar informações e no redux, apensa salvei a lista de usuários.
