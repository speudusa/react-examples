import calendar from './calendar.json'

// USE MAP

function SeasonSorting(){
   if(calendar.month === "June")
   {
      return(
      <h1>Summer Vacation starts in June</h1>
      );
   }
   return(

      <p>test</p>
   );
}

export default SeasonSorting;