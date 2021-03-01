
export default function startFetch(){
  const btcPreco = document.querySelector('[data-js="quotation"]');
  const pValue = document.querySelector("[data-js=p-value]");
  const result = document.querySelector("[data-js=result]");
  const btn = document.querySelector("[data-js=btn-calc]");
  
  const bitcoinPrice = async () =>{
      try{
        const response = await fetch('https://blockchain.info/ticker')
        const json = await response.json()
        const bit = await Number(json.BRL.sell.toFixed(0))
        btcPreco.innerText = bit;
        return result.innerText = bit / pValue.value;
      }
      catch(error){
       console.log(error)
      }
    }

    function patrimony(){
      bitcoinPrice()
    }
    btn.addEventListener('click', patrimony);
   
    return bitcoinPrice()
}




