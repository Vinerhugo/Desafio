# PROJETO DESAFIO

### Neste projeto e usada a ferramenta cypress.io com cucumber e BDD

* Extensões sugeridas

1. Cypress
2. ESlint
3. GitLens - Git supercharged

### A estrutura ta divida do seguinte modo: 

* Pasta `.vscode` possui um unico arquivo com informações de configuração da ferramenta vscode com o eslint

* Pasta `config` possui informações de cada variavel de ambiente onde para a mudança de um ambiente para o outro trás uma simplicidade muito grande, cujo qual era uma dificuldade cotidiana, possui exemplos com arquivos de ambiente `develop`, `qa` e outros conforme a necessidade de cada projeto.

* Pasta cypress que possue subpastas que será explica cada uma abaixo:

A `fixture` é onde seus mocks são armazenados podendo ser utilizados em qualquer teste, normalmente coloco-se planilhas também neste local e qualquer arquivo fixo necessário.

A `integration` que é onde deve ser criado e salvo os testes.

`Plugins` com eles é possível trocar, modificar ou estender o comportamento interno do Cypress. Ex: Neste projeto e utilizado o plugins para conversão do cucumber e utilização do BDD além de um facilitador de ambiente visivel na pasta config.

A pasta `Support`, que é onde você colocará comandos personalizados e parâmetros para sua massa de testes.

* Arquivos na raiz do projeto

1. eslintignore é o arquivo que o eslint utiliza para ignorar arquivos que você não desejar utlizar a melhoria e padronização que o eslint aplica
2. .ESlint.js é o arquivo onde está as configurações do eslint
3. .gitignore e o arquivo onde indica para o git ignora ao fazer commits
4. GitLab-ci e o arquivo onde cria as schedules de integração continua 
5. Cypress.json é o arquivo onde tem as configurações e variaveis de ambiente do cypress
6. Package.json é o arquivo onde está os facilitadores de execução
7. README.md é o arquivo onde instrui os usuarios a entender o projeto e executar o mesmo

### Clonar o projeto `Desafio` e executar no terminal para rodar o projeto:

* No projeto `Desafio` executar o seguinte comando no terminal:

### Para que o node instale as dependencias

```
npm i
```
### Para que o node chame o cypress e rode em headless 

```
npm run cypress:run 
```

### Para que o node chame o cypress e abra uma interface para executar os testes em interface

```
npm run cypress:open
```

### Para que o node chame o cypress e execute apenas os testes de front em headless

```
npm run cypress:front
```

### Para que o node chame o cypress e execute apenas os testes de back em headless

```
npm run cypress:back
```

### Para que o node chame o cypress e execute apenas um arquivo de teste em headless

```
npm run cypress:feature **/NAMEFILE.test.js
```

### Comandos e observações sobre o projeto 

* `Support` Criados para auxiliar nos testes
    - Como usá-los:
    
    - Em `commans_api` possui os seguintes comando:
    1. `cy.CriarMassa`: Ele cria a massa inicial como pré requisito dos testes do label.
    2. `cy.ExcluirMassa`: Ele exclui a massa inicial como dos testes do label.
    
    - Em `authRequest` possui uma função que carrega o base URl e abstrai e facilita para a execução das chamadas de API carregando os headers caso necessario, e chamando cada função post, get , put e delete de forma mais resumida facilitando o dia a dia do programador.

    - Em `generateToken` possui a função para gerar um Token dinamicamente e integra com o authRequest caso o programador queira e condiza com a realidade do projeto praticado.

    - Em `BDD/steps` possui o arquivos com os passo do BDD do projeto. 

    - Em `constraints` possui as contrain necessaria para estruturar e manter o padrão de escrita do projeto, lembrando que nem tudo em um projeto será váriavel de ambiente e sempre necessario a utilização de constraints.

    - Em `generateRandomString` é uma função javascript que gera uma string dinamicamente. 

    - Em `index` possui as importações necessarias para integração do projeto.

### Variaveis de Ambiente

* `URL_TRELLO` Variavel que possui a URL raiz para os testes
* `apiKey` O api key e necessario para autenticação no trello
* `token` O token e necessario para autenticação no trello
