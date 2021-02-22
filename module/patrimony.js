import initPrice from './price.js'

export default function initPatrimony(){

      const pValue = document.querySelector("[data-js=p-value]");
      const btn = document.querySelector("[data-js=btn-calc]");
      const result = document.querySelector("[data-js=result]");
      function patrimony(){
        result.innerText = ( 2000 / pValue.value + ' bitcoin');
      }
      btn.addEventListener('click', patrimony);

      console.log(initPrice())
};