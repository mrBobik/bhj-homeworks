const menuLink = Array.from(document.getElementsByClassName('menu__link'));


menuLink.forEach(el => {
    el.onclick = function () {
        let parent = el.parentElement.querySelector('ul');
        if (parent.classList.contains('menu_active')) {
            parent.classList.remove('menu_active');
        } else {parent.classList.add('menu_active')}
        return false;
    };
})
