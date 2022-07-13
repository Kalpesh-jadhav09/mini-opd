import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Receptionist from './Components/Receptionist';
import {Doctor} from './Components/Doctor';
import Header from './Components/Header'
import Footer from './Components/Footer';
import OPD from './Components/OPD';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'element={<OPD/>}/>
      <Route path='/Receptionist'element={<Receptionist />}/>
      <Route path='/Doctor'element={<Doctor />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>

  );
}

export default App;