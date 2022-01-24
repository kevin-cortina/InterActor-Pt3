import './App.css';
import stylesheet from './assets/css/stylesheet.css'
import materialize from './assets/css/materialize.css'
import NavBar from './component/NavBar';
import SearchBar from './component/SearchBar';
import InterActorPage from './Pages/InterActorPage';

function App() {
  return (
    <>
    <NavBar/>
    <SearchBar/>
    <InterActorPage/>
    {/* <BioModals></BioModals> */}

    <link rel='stylesheet' href={stylesheet}/>
    <link rel='materialize' href={materialize}/>
    </>
  );
}

export default App;
