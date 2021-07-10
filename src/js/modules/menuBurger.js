const menuBurger = (menu, item, target, lock = false) => {
	let menuBody = document.querySelector(menu);
    let menuItem = document.querySelectorAll(item);
    let hamburger = document.querySelector(target);

    hamburger.addEventListener('click', () => {    
        hamburger.classList.toggle('active');
        menuBody.classList.toggle('active');
        // если необходимо блокировать прокрутку фона (атрибут lock указать true)
        if (lock) {
            document.body.classList.toggle('scroll-lock');
        }
        // время выполнения ставится в соответствии с transition
        setTimeout(() => {
            menuBody.focus();
        }, 600);
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                menuBody.classList.remove('active');
                 // если необходимо блокировать прокрутку фона (атрибут lock указать true)
                if (lock) {
                    document.body.classList.remove('scroll-lock');
                }
            }
        })
    })
};
export default menuBurger;