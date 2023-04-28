import nameData from './nameData.json'

function HelloData() {
   return(
      <h1>Hello, {nameData.name}!</h1>
   );
}

export default HelloData;