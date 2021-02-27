
const btcPreco = document.querySelector('[data-js="quotation"]');
  
export default async function startFech(){
    const url = 'https://blockchain.info/ticker';
    const response = await fetch(url)
    const json = await response.json()
    const bit = Number(json.BRL.sell.toFixed(0))
    btcPreco.innerText = bit
    console.log(bit)
  }




//  export default function startFech(){
//    const url = 'https://blockchain.info/ticker';
//    const btcPreco = document.querySelector('[data-js="quotation"]');
//    fetch(url)
//    .then(response => response.json())
//    .then((bitcoin) =>{
//      const bit = Number(bitcoin.BRL.sell.toFixed(0));
//       
//      }).catch(erro => console.log(Error(erro)));
//  }
//  