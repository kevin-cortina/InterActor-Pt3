// import './assets/css/App.css';
// import './assets/css/materialize.css'
// import './assets/css/stylesheet.css'
// import NavBar from './component/NavBar';
// import SearchBar from './component/SearchBar';
// import InterActorPage from './Pages/InterActorPage';
// import { useState } from 'react';
// import { AppProvider } from './assets/script/javascript';

// function App() {
//    const [currentPage, setCurrentPage] = useState('Results');

//   const handlePageChange = (page) => setCurrentPage(page);
//   return (
//     <AppProvider>
//       <NavBar handlePageChange={handlePageChange} />
//       <SearchBar/>
//       <InterActorPage currentPage={currentPage} />

//       <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
//     </AppProvider>
//   );
// }

// export default App;

import './assets/css/App.css';
import './assets/css/materialize.css'
import './assets/css/stylesheet.css'
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

      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </AppProvider>
  );
}

export default App;