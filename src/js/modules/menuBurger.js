const menuBurger = (menu, item, target) => {
	let menuBody = document.querySelector(menu);
    let menuItem = document.querySelectorAll(item);
    let hamburger = document.querySelector(target);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menuBody.classList.toggle('active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menuBody.classList.toggle('active');
        })
    })

    document.documentElement.addEventListener('click', (e) => {
		if (!e.target.closest('.brg')) {
			menuBody.classList.remove('active');
            hamburger.classList.remove('active');
		}
	});
};
export default menuBurger;