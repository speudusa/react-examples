let weekDays = [
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
   "Sunday"
   ];



   function DaysOfTheWeek() {
      const ListOfDays = (props) => {
         return props.map((day) => <li>{day}</li>);
      };
   return <ul>{ListOfDays(weekDays)}</ul>;
   }


   export default DaysOfTheWeek;