#language: pt
Funcionalidade: CRUD label aplicação trello

    Cenário: Efetuar o cadastro de um label via API
        Dado que se crie a massa de dados
        Então crio um novo label e verifico se realmente foi cadastrado

    Cenário: Efetuar a Busca de um label via API
        Dado que possua um label cadastrado
        Então efetuo a busca do label e verifico se concluio com sucesso

    Cenário: Efetuar a edição de um label via API
        Dado que possua um label cadastrado
        Então efetuo a edição do label e verifico se concluio com sucesso

    Cenário: Efetuar a exclusão de um label via API
        Dado que possua um label cadastrado
        Então efetuo a exclusão do label e verifico se concluio com sucesso
        Então Excluo a massa de dados