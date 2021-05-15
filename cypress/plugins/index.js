module.exports = (on, config) => {
    require('@cypress/code-coverage/task')(on, config)
    return config
}

const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile (file) {
    // caminho da pasta onde estão presentes os arquivos JSON dos ambientes
    const pathToConfigFile = path.resolve('config', `${file}.json`)

    return fs.readJson(pathToConfigFile)
}

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
    // aceita um valor de "configFile" ou usa "develop" por padrão
    const file = config.env.configFile || 'develop'
    on('file:preprocessor', cucumber())
    return getConfigurationByFile(file)
}
