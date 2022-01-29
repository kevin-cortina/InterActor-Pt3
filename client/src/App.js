import './assets/css/App.css';
// import stylesheet from './assets/css/stylesheet.css'
import materialize from './assets/css/materialize.css'
import stylesheet from './assets/css/stylesheet.css'
import NavBar from './component/NavBar';
import SearchBar from './component/SearchBar';
import InterActorPage from './Pages/InterActorPage';

function App() {
  return (
    <>
    <NavBar/>
    <SearchBar/>
    <InterActorPage/>

    <link rel='materialize' href={materialize}/>
    <link rel='stylesheet' href={stylesheet}/>
    </>
  );
}

export default App;