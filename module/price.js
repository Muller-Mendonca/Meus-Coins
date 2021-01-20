
export default function initPrice(){
  const update = document.querySelector("[data-js=update-price]");

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
   
  function updatePrice(e){
    e.preventDefault();
    startFech();
  };
  update.addEventListener('click', updatePrice);

  const result = document.querySelector("[data-js=result]");
  console.log(result);    
 
 return startFech();
};
