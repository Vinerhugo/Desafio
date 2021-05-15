import authRequest from '../../../support/api/authRequest'

describe('API trello APPLICATION', () => {

    before(() => {
        cy.CriarMassa()
    })
    beforeEach(() => {
    })
    after(() => {
        cy.ExcluirMassa()
    })

    it('Cria um label', () => {

        const path = `/1/labels?key=${Cypress.env('apiKey')}&token=${Cypress.env('token')}&name=Novo label&color=blue&idBoard=${Cypress.env('idBoard')}`

        authRequest.post('trello', path, ['!authorization'], false)
            .then((res) => {
                expect(res['status']).to.equal(200)
                // expect(res['body']['name']).to.equal('Criando um cartão')
                Cypress.env('idLabel', res.body.id)
            })

    })

    it('Busca um label', () => {

        const path = `/1/labels/${Cypress.env('idLabel')}?key=${Cypress.env('apiKey')}&token=${Cypress.env('token')}`

        authRequest.get('trello', path, ['!authorization'], false)
            .then((res) => {
                expect(res['status']).to.equal(200)
                // expect(res['body']['name']).to.equal('Criando um cartão')
            })

    })

    it('Edita um label', () => {

        const path = `/1/labels/${Cypress.env('idLabel')}?key=${Cypress.env('apiKey')}&token=${Cypress.env('token')}&name=Atualização label&color=red`

        authRequest.put('trello', path, ['!authorization'], false)
            .then((res) => {
                expect(res['status']).to.equal(200)
                // expect(res['body']['name']).to.equal('Criando um cartão')
            })

    })

    it('Exclui um label', () => {

        const path = `/1/labels/${Cypress.env('idLabel')}?key=${Cypress.env('apiKey')}&token=${Cypress.env('token')}`

        authRequest.del('trello', path, ['!authorization'], false)
            .then((res) => {
                expect(res['status']).to.equal(200)
                // expect(res['body']['name']).to.equal('Criando um cartão')
            })

    })
})
