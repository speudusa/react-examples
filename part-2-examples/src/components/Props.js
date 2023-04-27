
//using props as argument
// function PetCheck(props){
   
//    if(props.type === 'dog')
//    {
//       return (<h1>Who's a good doggo?  {props.name} is!</h1>)
//    }
//    return(<h2>{props.name} Meow!</h2>)
// }


// ----- passing named/declared props ------
//function PetCheck({name="Penny", type = "dog"}){
   function PetCheck({name, type}){
   
   if(type === 'dog')
   {
      return (<h1>Who's a good doggo?  {name} is!</h1>)
   }
   return(<h2>{name} Meow!!!!</h2>)
}

//passing props to the child component

// function PatThePet(){
//    return(
//    <div>
//       <PetCheck
//          name="Willow"
//          type="dog"/>
//       <PetCheck
//          name="Alyce"
//          type="cat"/>
//       <PetCheck />
//    </div>
//    );
// }

function PatThePet(){
   return(
   <div>
      {/* testing the default values */}
      <PetCheck />

      <p>* * * * * * * * * *</p>

      {/* Setting values of the props */}
      <PetCheck
         name="Alyce"
         type="cat"/>

      <PetCheck
          name="Willow"
          type="dog"/> 
      <p> ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ </p>

      {/* We could also set values of PetCheck in the App() Look for Artemis*/}
   </div>
   );
}

export default PatThePet;

//https://react.dev/learn/passing-props-to-a-component