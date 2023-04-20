import './App.css';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import ListGroup from './components/ListGroup';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ListGroup></ListGroup>
      <Presentation></Presentation>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
