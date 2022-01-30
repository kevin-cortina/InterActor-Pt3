import './assets/css/App.css';
// import stylesheet from './assets/css/stylesheet.css'
import materialize from './assets/css/materialize.css'
import stylesheet from './assets/css/stylesheet.css'
import NavBar from './component/NavBar';
import SearchBar from './component/SearchBar';
import InterActorPage from './Pages/InterActorPage';
import { useState } from 'react';
import { AppProvider } from './assets/script/javascript';

function App() {
   const [currentPage, setCurrentPage] = useState('Results');

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <AppProvider>
      <NavBar handlePageChange={handlePageChange} />
      <SearchBar/>
      <InterActorPage currentPage={currentPage} />

      <link rel='materialize' type='text/css' href={materialize}/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel='stylesheet' type='text/css' href={stylesheet}/>
    </AppProvider>
  );
}

export default App;

/* 
To do after app works:
Change NavbBar to Header
Uncheese
*/