
export default function initModal(){
    const modalBtn = document.querySelector("[data-js=btn-modal]")
    const modalPatrimony = document.querySelector("[data-js=modal-patrimony]")
    const close = document.querySelector("[data-js=close]")
    const focus = document.querySelector("[data-js=focusInput]")

    function handleClick(e){
        e.preventDefault()
        modalPatrimony.classList.add('modal-active')
    }
    modalBtn.addEventListener('click', handleClick);
    focus.addEventListener('click', handleClick);

    function closeModal(){
        modalPatrimony.classList.remove('modal-active')
    }
    close.addEventListener('click', closeModal)
};