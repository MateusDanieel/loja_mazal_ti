(function() {
    'use strict';

    let menu = document.querySelector('.sec-navbar-menu  .menu');
    let openMenu = document.querySelector('.sec-header .btn-menu-toggle');
    let closeMenu = document.querySelector('.sec-navbar-menu  .btn-menu-toggle');

    openMenu.addEventListener('click', function() {
        menu.classList.add('active');
    });

    closeMenu.addEventListener('click', function() {
        menu.classList.remove('active');
    });

})();