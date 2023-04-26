
//using props as argument
// function PetCheck(props){
   
//    if(props.type === 'dog')
//    {
//       return (<h1>Who's a good doggo?  {props.name} is!</h1>)
//    }
//    return(<h2>{props.name} Meow!</h2>)
// }


//passing named/declared props 
//set default values
//function PetCheck({name = "Penny", type = "dog"}){
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

function PatThePet(props){
   return(
   <div>
      {/* this is useful if component is  */}
      <PetCheck {...props}/>
      <PetCheck
         name="Alyce"
         type="cat"/>
      <PetCheck />
      <PetCheck
          name="Willow"
          type="dog"/>
   </div>
   );
}

export default PatThePet;

//https://react.dev/learn/passing-props-to-a-component