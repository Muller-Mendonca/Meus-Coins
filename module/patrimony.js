
export default function initPatrimony(){

      const pValue = document.querySelector("[data-js=p-value]");
      const result = document.querySelector("[data-js=result]");
      function patrimony(){
        result.innerText = ( 2000 / pValue.value);
      }
      pValue.addEventListener('mouseout', patrimony);
   
     

   };