
  export default function startFech(){
    const url = 'https://blockchain.info/ticker';
    const btcPreco = document.querySelector('[data-js="quotation"]');
    fetch(url)
    .then(response => response.json())
    .then((bitcoin) =>{
      const bit = Number(bitcoin.BRL.sell.toFixed(0));
       btcPreco.innerText = bit
      }).catch(erro => console.log(Error(erro)));
  }

  