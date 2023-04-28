import './../styles.css'

function NumberSet({ num }) {
   if (Number(num) % 2 === 0) {
     return <li className="isEven">{num} is EVEN 🎡 </li>;
   }
   return <li className="isOdd">{num} is ODD 📓 </li>;
 }

export default function NumberCheck() {
   return (
      <section>
         <h1>Even or Odd Numbers??</h1>
         <ul>
         <NumberSet 
            num="14"
         />
         <NumberSet 
            num="22"
         />
         <NumberSet 
            num="99"
         />
         </ul>
      </section>
   );
}

