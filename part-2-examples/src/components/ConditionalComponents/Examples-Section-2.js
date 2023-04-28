import Trees from './Trees';

function ExamplesSection2(){
   return(
      <>
            <Trees 
        isEvergreen={true}
        name="Hellebore"
      />
         <Trees
        isEvergreen={false}
        name="Birch"
      />
      
      </>
   )
}

export default ExamplesSection2;