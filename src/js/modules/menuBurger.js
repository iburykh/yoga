const menuBurger = () => {
	let menuBody = document.querySelector('.menu');
    let menuItem = document.querySelectorAll('.menu__item');
    let hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menuBody.classList.toggle('active');
        document.body.style.overflow = 'hidden';
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menuBody.classList.toggle('active');
            document.body.style.overflow = '';
        })
    })

    document.documentElement.addEventListener('click', (e) => {
		if (!e.target.closest('.hamburger') && !e.target.closest('.menu')) {
			menuBody.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
		}
	});
};
export default menuBurger;