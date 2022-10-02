const shell = require('shelljs')
const fs = require('fs')

const projectName =  process.argv[2] ? process.argv[2] : 'react-tez-app'
console.log(`Creating ${projectName}...`)
shell.exec(`git clone git@github.com:strandgeek/react-tez-boilerplate-ts.git ${projectName}`)

const packageJson = fs.readFileSync(`./${projectName}/package.json`)

const package = JSON.parse(packageJson.toString())

package.name = projectName

fs.writeFileSync(`./${projectName}/package.json`, JSON.stringify(package, null, 2))

console.log('Installing npm dependencies...')
shell.exec(`cd ./${projectName} && npm i --quiet && cd ..`)

console.log('ReactTez project created! ✅\n')
console.log(`To start the application run:\n\ncd ${projectName} && npm start`)
