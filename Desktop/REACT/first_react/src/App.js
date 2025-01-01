
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import ChangeName from './components/ChangeName';



// Function based component
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Header/>
      <Footer/>
      <Student id={101} name="Shriya"/>
      <Student id={102} name="Ankita"/>

      <Demo message="Happy new year" year="2025"/>
      <Demo2 date="01/01/2025"/>

      <ChangeName/>
  
    </div>
  );
}

export default App;
// export default function name. To import export first
