require('cypress-xpath')
import 'cypress-wait-until'
import 'cypress-localstorage-commands'
import '@cypress/code-coverage/support'

import './api/commands_api'

// Exemplo de como exportar variavel de ambiente para a maquina recomenda colocar no bashrc
// export CYPRESS_PASSWORD=valor
// export CYPRESS_PASSWORD_ADMIN=valor
