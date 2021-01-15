
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

      const updatePrice = () =>{
        console.log('Atualizou o preço');
        initPrice();
      };

      const result = document.querySelector("[data-js=result]");
      console.log(result);    
};
