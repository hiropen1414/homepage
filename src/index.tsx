
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const endpoint = process.env.GRAPHQL_ENDPOINT;

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-api-key': process.env.API_KEY,
    }
  };
});

console.log(process.env.API_KEY, endpoint);
// Apollo Clientのインスタンスを作成
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(
    new HttpLink({
      uri: endpoint,
    })
  )
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
