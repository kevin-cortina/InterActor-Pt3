import './assets/css/App.css';
import './assets/css/materialize.css'
import './assets/css/stylesheet.css'
import NavBar from './component/NavBar';
import SearchBar from './component/SearchBar';
import InterActorPage from './Pages/InterActorPage';
import { useState } from 'react';
import { AppProvider } from './assets/script/javascript';
import LoginModals from './component/LoginModals';
import SignUpModal from './component/SignUpModal';

function App() {
  const [currentPage, setCurrentPage] = useState('Results');

  const pageLoad = () => {
    if (currentPage === 'Login') {
      return <LoginModals />
    }
    if (currentPage === 'SignUp') {
      return <SignUpModal />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <AppProvider>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {pageLoad()}
      
      <SearchBar/>
      
      <InterActorPage  />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </AppProvider>
  );
}

export default App;