
export default function initPrice(){
    console.log('iniciou preco')
    const url = 'https://blockchain.info/ticker';
    const btcPreco = document.querySelector('[data-js="quotation"]');
    fetch(url)
    .then(response => response.json())
    .then((bitcoin) =>{
    btcPreco.innerText = (bitcoin.BRL.sell)
    .toFixed(4);
      }).catch(erro => console.log(Error(erro)));
    
};
