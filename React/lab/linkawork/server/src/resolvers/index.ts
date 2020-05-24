import fs from 'fs'
let resolvers = {
    Query: {},
    Mutation: {}
}

fs.readdirSync('./src/resolvers').forEach((filename: string) => {
    let file = require(`./${filename}`)
    if (!file.default)
        return
    file = file.default
    if (file.Query)
        resolvers.Query = { ...resolvers.Query, ...file.Query }; delete file.Query;
    if (file.Mutation)
        resolvers.Mutation = { ...resolvers.Mutation, ...file.Mutation }; delete file.Mutation;
    resolvers = { ...resolvers, ...file }
})

export default resolvers