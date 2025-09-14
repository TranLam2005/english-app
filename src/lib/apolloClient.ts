import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { getTokenFromCookies, TOKEN_TYPE } from '@/api/Cookies';

const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL + '/graphql/',
})


const authLink = setContext((_, {headers}) => {
    const token = getTokenFromCookies(TOKEN_TYPE.ACCESS_TOKEN);
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : "",
        }
    };
});


const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export default client;