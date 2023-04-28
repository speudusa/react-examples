import './App.css'
import SeasonSorting from './components/ConditionalComponents/MappingConditionals';
import NumberCheck from './components/ConditionalComponents/SimpleConditionals';
import ExamplesSection1 from './components/JSinReactComponents/Examples-Section-1';
import ConceptChecksSection1 from './components/JSinReactComponents/conceptChecks';
import ExamplesSection2 from './components/ConditionalComponents/Examples-Section-2';

function App() {
  return (
    <>
    <div>
      <h1 className='chapterSection'>Section 1 Examples</h1>
        <ExamplesSection1 />

      <h1>Concept Checks for Section 1</h1>
        <ConceptChecksSection1 />
    </div>

      <hr></hr>

    <div>
      <h1 className='chapterSection'>Section 2 Examples</h1>
        <ExamplesSection2 />
        <SeasonSorting />
        <NumberCheck/>
      <h1>Concept Checks for Section 2</h1>

    </div>
    </>
  );
}

export default App;
