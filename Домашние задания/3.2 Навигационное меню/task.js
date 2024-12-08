(() => {
  let current = null;

  document.querySelectorAll('.menu_main > .menu__item:has(.menu_sub) > a').forEach(menuItem => {
    menuItem.addEventListener('click', (e) => {
      e.preventDefault();
      const subMenu = menuItem.parentElement.querySelector('.menu_sub');

      // Закрываем текущее подменю, если оно открыто
      if (current && current !== subMenu) {
        current.classList.remove('menu_active');
      }

      // Переключаем состояние подменю
      if (subMenu.classList.contains('menu_active')) {
        subMenu.classList.remove('menu_active');
        current = null;
      } else {
        subMenu.classList.add('menu_active');
        current = subMenu;
      }
    });
  });
})();