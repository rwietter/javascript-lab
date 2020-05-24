import fetch from 'node-fetch'

import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

export default (token?: string) => {
    return new ApolloClient({
        link: new HttpLink({
            uri: 'http://localhost:8080/',
            fetch: fetch,
            headers: {
                authorization: token ? `Bearer ${token}` : '',
                language: "pt_br"
            }
        }),
        cache: new InMemoryCache()
    })
}