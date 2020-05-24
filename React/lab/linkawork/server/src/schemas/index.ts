import fs from 'fs'
import path from 'path'

//carrega os arquivos de schema
let schema = `
type Mutation
type Query
`;
fs.readdirSync(path.resolve(__dirname)).forEach(filename => {
    if (filename == 'index.ts') return;
    schema += fs.readFileSync(path.resolve(__dirname + '/' + filename), 'utf8') + "\n\n"
})

export default schema