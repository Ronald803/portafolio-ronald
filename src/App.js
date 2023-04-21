import './App.css';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Projects from './components/Projects';

function App() {
  return (
    <div className="container text-center" >
      <Navbar></Navbar>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
        <h3 id="scrollspy1">Hello!!!</h3>
        <Presentation></Presentation>
        <h3 id="scrollspy2">About me</h3>
        <AboutMe></AboutMe>
        <h3 id="scrollspy3">Projects</h3>
        <Projects></Projects>
        <h3 id="scrollspy4">Contacts</h3>
        <Contacts></Contacts>
      </div>      
    </div>
  );
}

export default App;
