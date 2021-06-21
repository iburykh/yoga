const mouseparallax = () => {
	window.onload = function () {
		const parallax = document.querySelector('.promo');
	
		if (parallax) {
			const mountains = document.querySelector('.img-parallax__mountains');
			const fog = document.querySelector('.img-parallax__fog');
			const forMountains = 40;
			const forFog = 20;
	
			const speed = 0.05;
	
			let positionX = 0, positionY = 0;
			let coordXprocent = 0, coordYprocent = 0;
	
			function setMouseParallaxStyle() {
				const distX = coordXprocent - positionX;
				const distY = coordYprocent - positionY;
	
				positionX = positionX + (distX * speed);
				positionY = positionY + (distY * speed);
	
				mountains.style.cssText = `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);`;
				fog.style.cssText = `transform: translate(${positionX / forFog}%,${positionY / forFog}%);`;
	
				requestAnimationFrame(setMouseParallaxStyle);
			}
			setMouseParallaxStyle();
	
			parallax.addEventListener("mousemove", function (e) {
				const parallaxWidth = parallax.offsetWidth;
				const parallaxHeight = parallax.offsetHeight;
				const coordX = e.pageX - parallaxWidth / 2;
				const coordY = e.pageY - parallaxHeight / 2;
	
				coordXprocent = coordX / parallaxWidth * 100;
				coordYprocent = coordY / parallaxHeight * 100;
			});
		}
	}
};
export default mouseparallax;