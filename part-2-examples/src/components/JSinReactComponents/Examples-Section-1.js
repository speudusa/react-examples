import ArrowGreeting from './arrowGreeting';
import Greeting from './Greeting';
import PatThePet from './PropsWithPets'

import TemplateLiteral from './TemplateLiteral';
import ShinyButton from './ButtonFunctions';
import HelloData from './WorkingWithData';

function ExamplesSection1(){
   return(
      <>
      <Greeting/>
      <ArrowGreeting/>
      <hr></hr>
      <PatThePet />
      <hr></hr>

      <HelloData />


      <TemplateLiteral />
      <ShinyButton />
      </>
   );
}

export default ExamplesSection1;
