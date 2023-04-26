import './styles.css'

// function Trees({name, isEvergreen}){
//    return (
//       <li className={`${!isEvergreen ? "deciduous" : "evergreen"}`}>
//          {name} {isEvergreen && 'X'}
//       </li>
//       // elements rendered based on their assigned bool value
//    );
// }

function Trees({name, isEvergreen}){
  
      if (isEvergreen){
         return( 
      <li className="evergreen">
         {name} {isEvergreen && 'X'}
      </li>
      );
   }
      return(
      <li className="deciduous">
         {name} {isEvergreen && 'X'}
      </li>
      
      // renders elements based on assigned bools
   );
}


// function Trees({name, isEvergreen}){
//    return (
//       <li className="evergreen">
//          {name} {isEvergreen && 'X'}
//       </li>
//       // all elements are purple and crossed out
//    );
// }

export default Trees;

//assigning the bools in the App

//make based on types of trees
//deciduous  vs coniferous