import './App.css'
// import SeasonSorting from './components/MappingComponents/MappingConditionals';
// import NumberCheck from './components/ConditionalComponents/SimpleConditionals';
// import ExamplesSection1 from './components/JSinReactComponents/Examples-Section-1';
// import ConceptChecksSection1 from './components/JSinReactComponents/conceptChecks';
// import ExamplesSection2 from './components/ConditionalComponents/Examples-Section-2';
// import EmojiGreeting from './components/MappingComponents/mappingButtons';
import DaysOfTheWeek from './components/MappingComponents/BasicMapping';
//  import RainOrShine from './components/ConditionalComponents/RainOrShine';



function Rainy(){
  return(
     <h1>Bring your umbrella!</h1>
  );
}

function Sunny(){
  return(
     <h1>Bring your sunglasses!</h1>
  )
}


const isRainy = true;
function RainOrShine(){
   if(isRainy) {
    return(
       <Rainy />
    );
 }
 return(
  <Sunny />
 )
}



function App() {
  return (

    
    // <div>
      // <h1 className='chapterSection'>Section 1 Examples</h1>
        // <ExamplesSection1 />

    //   <h1>Concept Checks for Section 1</h1>
    //     <ConceptChecksSection1 />
    // </div>

    //   <hr></hr>

    // <div>
    //   <h1 className='chapterSection'>Section 2 Examples</h1>
    //     <ExamplesSection2 />
    //     <SeasonSorting />
    //     <NumberCheck/>
    //     <RainOrShine
    //       // isRainy = {true}
    //       // testWord={"thunder"}
    //       // testWord={"kangaroo"}
    //       />
    <div className={`${isRainy ? "dark" : "light"}`}>
    <RainOrShine />
    <DaysOfTheWeek />
   </div>


    //   <h1>Concept Checks for Section 2</h1>
    // </div>

    // <div>
    //   <EmojiGreeting />
    // </div> 
  );
}

export default App;
