
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import ChangeName from './components/ChangeName';
import Counter from './components/Counter';
import EvenOdd from './components/EvenOdd';
import EvenOdd2 from './components/EvenOdd2';
import DisplayName from './components/DisplayName';

// Function based component and class based
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
      <Counter />
      
      <EvenOdd />

      <DisplayName />

      

      
  
    </div>
  );
}

export default App;
// export default function name. To import export first
