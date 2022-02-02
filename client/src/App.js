import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './assets/css/App.css';
import './assets/css/materialize.css'
import './assets/css/stylesheet.css'
import NavBar from './component/NavBar';
import SearchBar from './component/SearchBar';
import InterActorPage from './Pages/InterActorPage';
import { useState } from 'react';
import { AppProvider } from './assets/script/javascript';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setCurrentPage] = useState('Results');

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <SearchBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <InterActorPage currentPage={currentPage} handlePageChange={handlePageChange} />

        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </AppProvider>
    </ApolloProvider>

  );
}

export default App;