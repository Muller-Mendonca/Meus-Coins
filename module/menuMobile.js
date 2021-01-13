
export default function initMenuMobile(){
    const btn = document.querySelector("[data-js=btn]");
    const menu = document.querySelector("[data-js=menu-mobile]");

    const handleClick = () =>{
        menu.classList.toggle('active')
    }

    btn.addEventListener('click', handleClick);
};
