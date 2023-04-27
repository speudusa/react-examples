let num1 = 4;
let num2 = 7;
let name1 = "Willow";
let name2 = "Alyce";
num2 = 8

function TemplateLiteral(){
   return(
   <>
      <div>
      {/* No Template Literal */}
         {num1} * {num2} = 28 and {num1} + {num2} = 11
      </div>

      <div>
         {/* Using Template Literal */}
         {`(${num1} * ${num2}) is ${num1 * num2} and (${num1} + ${num2}) is ${num1 + num2}`}
      </div>


      {/* Logic for attributes using the ternary operator */}
      <div className={`${name1 === "Willow" ? "isWillow" : "arrow"}`}>
         {` My dog is named ${name1}. My cat is named ${name2}.`}
      </div>
   </>
   );
};

export default TemplateLiteral;