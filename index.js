let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');
const scrollInProgress = () => {
	didScroll = true
}
const raf = () => {
	if(didScroll) {
		paralaxTitles.forEach((element, index) => {
			element.style.transform = "translateX("+ window.scrollY / 70 + "%)"
		})
		didScroll = false;
	}
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)