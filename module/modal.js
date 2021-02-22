
export default function initModal(){
    const modalBtn = document.querySelector("[data-js=btn-modal]")
    const modalPatrimony = document.querySelector("[data-js=modal-patrimony]")
    const close = document.querySelector("[data-js=close]")

    function handleClick(){
        modalPatrimony.classList.add('modal-active')
    }
    modalBtn.addEventListener('click', handleClick);

    function closeModal(){
        modalPatrimony.classList.remove('modal-active')
    }
    close.addEventListener('click', closeModal)
};