//Concept Check Sandbox

const ArrowShareEmoji = () => {
   
   return(
      <h1>☂️</h1>
   );
}

function ShareEmoji(){
      return(
      <h1>🧦</h1>
   );
}

const bookInfo = {
   title: "Dracula",
   author: "Bram Stoker",
   published: 1897 
}

function Book(){
   return(
      <p>My favorite book is {bookInfo.title}</p>
   );
};

function ConceptChecksSection1()
{
   return(
      <>
      <ArrowShareEmoji />
      <ShareEmoji />
      <Book />
      </>
   )
}

export default ConceptChecksSection1;
