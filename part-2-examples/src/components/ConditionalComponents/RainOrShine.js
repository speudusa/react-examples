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

// --- if/else example ---

// function RainOrShine(props){
//    const isRainy = props.isRainy;
//    if(isRainy){
//       return(
//          <Rainy />
//       );
//    }
//    else{return(
//       <h1>No rain today!</h1>
//    );}
// }

// --- if && example --- 

// function RainOrShine(props){
//    const isRainy = props.isRainy;
//    const testWord = props.testWord;
//    if((isRainy) && (testWord === "thunder")) {
//       return(
//          <Rainy />
//       );
//    }
// }

// --- ternary example ---
function RainOrShine(props){
   const isRainy = props.isRainy;
   return isRainy ?  <Rainy /> : <Sunny />
}






// --- if example with props ---
// function RainOrShine(props){
//    const isRainy = props.isRainy;
//    if(isRainy){
//       return(
//          <Rainy />
//       );
//    }
//    return(
//       <Sunny />
//    );
// }

// function RainOrShine(props){
//    const isRainy = props.isRainy;
   // if(isRainy){
   //    return(
   //       <Rainy />
   //    );
   // }
   // return(
   //    <Sunny />
   // );
// }




export default RainOrShine;