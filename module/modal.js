
export default function initModal(){
    const modalBtn = document.querySelector("[data-js=btn-modal]")
    const modalPatrimony = document.querySelector("[data-js=modal-patrimony]")

    function handleClick(){
        modalPatrimony.classList.add('modal-active')
        console.log('clicou')
    }

    modalBtn.addEventListener('click', handleClick);
};