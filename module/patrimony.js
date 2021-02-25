import startFech from './price.js'

export default function initPatrimony(){
      const pValue = document.querySelector("[data-js=p-value]");
      const result = document.querySelector("[data-js=result]");
      const btn = document.querySelector("[data-js=btn-calc]");
      
      function patrimony(){
        result.innerText = startFech();
      }
      btn.addEventListener('click', patrimony);
}; 


/// pValue.value + ' bitcoins'