document.getElementById('menu-toggler').onclick = () => {
    const menu = document.getElementById('menu');
    menu.classList.contains('expand') ? menu.classList.remove('expand') : menu.classList.add('expand');
}