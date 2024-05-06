import Header from './component/Header';
import './App.css';
import { BrowserRouter as BR, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Template from './component/Template';
import About from "./component/About";
import Contribute from './component/Contribute';
import Contact from './component/Contact';
import Form from './component/Form';
import Sign from './component/Sign';
import SignIn from './component/SignIn';
import Formcv from './component/Formcv';
import Expcv from './component/Expcv';
import Expformcv from './component/Expformcv';
import Premium from './component/Premium';
import Premiumcv from './component/Premiumcv';

function App() {
  return (
    <>
    <BR>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Template" element={<Template/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/Contribute" element={<Contribute/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Sign" element={<Sign/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/Formcv" element={<Formcv/>}  />
        <Route path="/Expcv" element={<Expcv/>}/>
        <Route path="/Expformcv" element={<Expformcv/>}/>
        <Route path="/Premium" element={<Premium/>}/>
        <Route path="/Premiumcv" element={<Premiumcv/>}/>
        
        
      </Routes>
    </BR>
    

    
    
    
    </>
  );
}

export default App;
