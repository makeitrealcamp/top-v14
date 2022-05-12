import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Main } from './ components/Main';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
  uri: 'https://api.spacex.land/graphql/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;
