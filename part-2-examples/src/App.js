import ArrowGreeting from './components/arrowGreeting';
import Greeting from './components/Greeting';
import PatThePet from './components/Props'
import Trees from './components/Trees';
import TemplateLiteral from './components/TemplateLiteral';
import ShinyButton from './components/Functions';
import HelloData from './components/WorkingWithData';

function App() {
  return (
    <div>
      <Greeting/>
      <ArrowGreeting/>
      <hr></hr>
      <PatThePet />
      <hr></hr>
      <Trees 
        isEvergreen={true}
        name="Hellebore"
      />
         <Trees
        isEvergreen={false}
        name="Birch"
      />
      <HelloData />


      <TemplateLiteral />
      <ShinyButton />
    </div>
  );
}

export default App;
