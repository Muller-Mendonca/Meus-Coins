
export default function initPrice(){

 
    const url = 'https://blockchain.info/ticker';
    const btcPreco = document.querySelector('[data-js="quotation"]');
    fetch(url)
    .then(response => response.json())
    .then((bitcoin) =>{
    btcPreco.innerText = bitcoin.BRL.sell
    .toFixed(0);
    console.log(btcPreco)
      }).catch(erro => console.log(Error(erro)));
  
   
  const update = document.querySelector("[data-js=update-price]");

  function updatePrice(e){
    e.preventDefault();
    console.log('Atualizou o preço');
    return btcPreco;
  };

  update.addEventListener('click', updatePrice);

 

    //  const result = document.querySelector("[data-js=result]");
    //  console.log(result);    
};
