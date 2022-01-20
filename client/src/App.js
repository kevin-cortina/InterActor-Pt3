import logo from './logo.svg';
import './App.css';
import InterActorPage from './Pages/InterActorPage';
import BioModals from './component/BioModals';
import LoginModal from './component/LoginModals';
import NavBar from './component/NavBar';
function App() {
  return (
    <>
    <NavBar></NavBar>
    <InterActorPage></InterActorPage>
    <BioModals></BioModals>
    <LoginModal></LoginModal>
    </>
  );
}

export default App;
