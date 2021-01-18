
export default function initPrice(){


  function startFech(){
    const url = 'https://blockchain.info/ticker';
    const btcPreco = document.querySelector('[data-js="quotation"]');
    fetch(url)
    .then(response => response.json())
    .then((bitcoin) =>{
    btcPreco.innerText = bitcoin.BRL.sell
    .toFixed(0);
      }).catch(erro => console.log(Error(erro)));
  }
   
   
  const update = document.querySelector("[data-js=update-price]");

  function updatePrice(e){
    e.preventDefault();
    startFech();
    console.log('esta atualizando')
  };

  update.addEventListener('click', updatePrice);

 
 return startFech();
    //  const result = document.querySelector("[data-js=result]");
    //  console.log(result);    
};
