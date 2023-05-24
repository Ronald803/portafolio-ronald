import './App.css';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Projects from './components/Projects';

function App() {
  return (
    <div className="container" >
      <Navbar></Navbar>
      <br></br>
      <div className='bg-black border border-2'>
        <Presentation></Presentation>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Contacts></Contacts>        
      </div>
    </div>
  );
}

export default App;
