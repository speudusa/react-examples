import ArrowGreeting from './components/arrowGreeting';
import Greeting from './components/Greeting';
import PatThePet from './components/Objects'
import Trees from './components/Trees';

function App() {
  return (
    <div>
      <Greeting/>
      <ArrowGreeting/>
      <PatThePet />
      
      <Trees 
        isEvergreen={true}
        name="Hellebore"
      />
         <Trees
        isEvergreen={false}
        name="Birch"
      />
    </div>
  );
}

export default App;
