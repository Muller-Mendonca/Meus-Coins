import initPrice from './price.js'

export default function initPatrimony(){

      const btn = document.querySelector("[btn-patrimony]");
      const result = document.querySelector("[data-js=result]");

      function patrimony(){
        result.innerText = ( 2000 / pValue.value + ' bitcoin');
      }
      btn.addEventListener('click', patrimony);

      console.log(initPrice())
};