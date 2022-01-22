import './App.css';
import InterActorPage from './Pages/InterActorPage';
// import BioModals from './component/BioModals';
// import LoginModal from './component/LoginModals';
import stylesheet from './assets/css/stylesheet.css'
import materialize from './assets/css/materialize.css'
import NavBar from './component/NavBar';
function App() {
  return (
    <>
    {/* <NavBar></NavBar> */}
    <InterActorPage/>
    {/* <BioModals></BioModals>
    <LoginModal></LoginModal> */}

    <link rel='stylesheet' href={stylesheet}/>
    <link rel='materialize' href={materialize}/>
    </>
  );
}

export default App;
