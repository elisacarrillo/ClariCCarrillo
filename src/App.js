import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MenuComponent from './components/Menu';
import { Router } from '@reach/router';
// import Button from 'react-bootstrap/esm/Button';
import Home from './components/Home';
import About from './components/AboutMe';
import Footer from './components/footer';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import ContentCreation from './components/ContentCreation';
import Choreo from './components/Choreo';
function App() {
  return (
    <div className='background'>
      <MenuComponent></MenuComponent>
      <Router> 
        <Home path="/home" default/>
        <About path="/about"/>
        <MyWork path="/mywork"/>
        <Contact path='/contact'/>
        <ContentCreation path='/contentcreation'/>
        <Choreo path='/choreo'/>

      </Router>
      <Footer/>
      {/* <p>Hello!</p> */}
    </div>
    

   
    
  );
}

export default App;
