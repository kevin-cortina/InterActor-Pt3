import './assets/css/App.css';
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
    {/* <link rel='stylesheet' href={require('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css')}/> */}
    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'/>
    <link rel='stylesheet' href={stylesheet}/>

    </>
  );
}

export default App;