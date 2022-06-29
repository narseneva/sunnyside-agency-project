let menu = document.querySelector('.navbar');
console.log(menu);
let toggleMenu = document.querySelector('.toggle');
console.log(toggleMenu);

let toggle = (e)=> {
    e.preventDefault();
    if(menu.classList.contains('active')) {
        menu.classList.remove('active');

        toggleMenu.innerHTML = `<i class="fas fa-bars"></i>`;
    } else {
        menu.classList.add('active');
        toggleMenu.innerHTML = `<i class="fas fa-times"></i>`;
    }
}

toggleMenu.addEventListener('click', toggle, false);