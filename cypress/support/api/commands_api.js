/* eslint-disable cypress/no-unnecessary-waiting */
import 'cypress-wait-until'
import 'cypress-localstorage-commands'
import authRequest from '../api/authRequest'

Cypress.Commands.add('CriarMassa', () => {

    const path = `/1/boards/?key=${Cypress.env('apiKey')}&token=${Cypress.env('token')}&name=Novo Board`

    authRequest.post('trello', path, ['!authorization'], false)
        .then((res) => {
            expect(res['status']).to.equal(200)
            expect(res['body']['name']).to.equal('Novo Board')
            Cypress.env('idBoard', res.body.id)
        })

})

Cypress.Commands.add('ExcluirMassa', () => {

    const path = `/1/boards/${Cypress.env('idBoard')}?key=${Cypress.env('apiKey')}&token=${Cypress.env('token')}`

    authRequest.del('trello', path, ['!authorization'], false)
        .then((res) => {
            expect(res['status']).to.equal(200)
        })

})
