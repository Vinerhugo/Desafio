/* global When, Then */
import authRequest from '../../../support/api/authRequest'

Then('que se crie a massa de dados', () => {
    cy.CriarMassa()
})

When('crio um novo label e verifico se realmente foi cadastrado', () => {
    const path = `/1/labels?key=${Cypress.env('apiKey')}&token=${Cypress.env('token')}&name=Novo label&color=blue&idBoard=${Cypress.env('idBoard')}`

    authRequest.post('trello', path, ['!authorization'], false)
        .then((res) => {
            expect(res['status']).to.equal(200)
            Cypress.env('idLabel', res.body.id)
        })
})

Then('que possua um label cadastrado', () => {
})

When('efetuo a busca do label e verifico se concluio com sucesso', () => {
    const path = `/1/labels/${Cypress.env('idLabel')}?key=${Cypress.env('apiKey')}&token=${Cypress.env('token')}`

    authRequest.get('trello', path, ['!authorization'], false)
        .then((res) => {
            expect(res['status']).to.equal(200)
        })

})

When('efetuo a edição do label e verifico se concluio com sucesso', () => {
    const path = `/1/labels/${Cypress.env('idLabel')}?key=${Cypress.env('apiKey')}&token=${Cypress.env('token')}&name=Atualização label&color=red`

    authRequest.put('trello', path, ['!authorization'], false)
        .then((res) => {
            expect(res['status']).to.equal(200)
        })

})

When('efetuo a exclusão do label e verifico se concluio com sucesso', () => {
    const path = `/1/labels/${Cypress.env('idLabel')}?key=${Cypress.env('apiKey')}&token=${Cypress.env('token')}`

    authRequest.del('trello', path, ['!authorization'], false)
        .then((res) => {
            expect(res['status']).to.equal(200)
        })

})

When('Excluo a massa de dados', () => {
    cy.ExcluirMassa()
})
